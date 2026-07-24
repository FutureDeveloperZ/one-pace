import { registerEpisodeHooks } from './hooks/episodes';
import { registerMetadataHooks } from './hooks/metadata';
import { registerProgressHooks } from './hooks/progress';
import { detectOnePaceFiles } from './detection';

console.log("[One Pace] Plugin loaded");

const detectedFiles = detectOnePaceFiles();
console.log(`[One Pace] Detected ${detectedFiles.length} One Pace files`);

registerEpisodeHooks();
registerMetadataHooks();
registerProgressHooks();

$ui.register((ctx) => {
  const tray = ctx.newTray({
    iconUrl: "https://raw.githubusercontent.com/5rahim/seanime/main/seanime-web/public/icon.png",
    withContent: true,
    width: "280px",
  });

  tray.render(() => {
    tray.stack([
      tray.text(`One Pace — ${detectedFiles.length} files detected`),
      tray.button("Rescan Files", { onClick: "rescan" }),
    ], { gap: 8 });
  });

  tray.onClick(() => {
    tray.open();
  });

  ctx.registerEventHandler("rescan", () => {
    const files = detectOnePaceFiles();
    console.log(`[One Pace] Rescanned: ${files.length} files`);
    ctx.toast.success(`Found ${files.length} One Pace files`);
  });
});
