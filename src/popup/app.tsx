import { useState, useEffect, useCallback } from 'preact/hooks';
import { getValues, OPPStorage, setValue } from '../storage';
import './app.css';

export function App() {
  const [settings, _setSettings] = useState<OPPStorage>();

  useEffect(() => {
    const loadValues = async () => {
      const stored: OPPStorage = await getValues(null);
      _setSettings(stored);
    };
    loadValues();
  }, []);

  const updateSetting = useCallback(
    async (key: keyof OPPStorage, value: OPPStorage[keyof OPPStorage]) => {
      await setValue(key, value);
      _setSettings((prevProps) => ({
        ...(prevProps as OPPStorage),
        [key]: value,
      }));
    },
    []
  );

  if (!settings) {
    return <>Loading</>;
  }

  return (
    <>
      <h2>Overleaf++</h2>
      <div>
        <div>
          <span>Enable file drop: </span>
          <input
            type="checkbox"
            checked={settings.fileDropEnabled}
            onChange={async (event) => {
              const checked = event.currentTarget.checked;
              updateSetting('fileDropEnabled', checked);
            }}
          />
        </div>
        <div>
          <span>Enable pdf/svg viewing: </span>
          <input
            type="checkbox"
            checked={settings.imageCompatEnabled}
            onChange={async (event) => {
              const checked = event.currentTarget.checked;
              updateSetting('imageCompatEnabled', checked);
            }}
          />
        </div>
        <div>
          <span>Enable peek preview: </span>
          <input
            type="checkbox"
            checked={settings.peekPreviewEnabled}
            onChange={async (event) => {
              const checked = event.currentTarget.checked;
              updateSetting('peekPreviewEnabled', checked);
            }}
          />
        </div>
      </div>
    </>
  );
}
