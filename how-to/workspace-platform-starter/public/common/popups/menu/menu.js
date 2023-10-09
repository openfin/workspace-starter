document.addEventListener('DOMContentLoaded', initDOM);

/**
 * Initialize the DOM components.
 */
async function initDOM() {
	const options = await fin.me.getOptions();

	const backgroundPrimary = options?.customData?.palette?.backgroundPrimary ?? '#1e1f23';
	const textDefault = options?.customData?.palette?.textDefault ?? '#ffffff';
	const inputBackground = options?.customData?.palette?.inputBackground ?? '#383a40';

	const root = document.querySelector(':root');
	if (root) {
		root.style.setProperty(`--background-primary`, backgroundPrimary);
		root.style.setProperty(`--text-default`, textDefault);
		root.style.setProperty(`--input-background`, inputBackground);
	}

	const menuContainer = document.querySelector('#menuContainer');

	if (menuContainer) {
		if (Array.isArray(options.customData?.menuEntries) && options.customData.menuEntries.length > 0) {
			for (const menuEntry of options.customData.menuEntries) {
				const menuEntryItem = document.createElement('div');
				menuContainer.append(menuEntryItem);

				if (menuEntry.type === 'separator') {
					menuEntryItem.classList.add('menu-item-separator');

					const sep = document.createElement('hr');
					menuEntryItem.append(sep);
				} else {
					menuEntryItem.classList.add('menu-item');
					menuEntryItem.addEventListener('click', async () => {
						await fin.me.dispatchPopupResult(menuEntry.customData);
					});

					let icon;
					if (menuEntry.icon) {
						icon = document.createElement('img');
						icon.src = menuEntry.icon;
						icon.width = 16;
						icon.height = 16;
					}

					const text = document.createElement('span');
					text.textContent = menuEntry.label;

					if (icon) {
						menuEntryItem.append(icon);
					}
					menuEntryItem.append(text);
				}
			}
		} else {
			const noEntries = document.createElement('div');
			noEntries.textContent = options.customData?.noEntryText ?? 'No entries';
			noEntries.classList.add('menu-item-none');
			menuContainer.append(noEntries);
		}
	}
}
