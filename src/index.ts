import { registerEpisodeHooks } from './hooks/episodes';
import { registerMetadataHooks } from './hooks/metadata';
import { registerProgressHooks } from './hooks/progress';

console.log("[One Pace] Plugin loaded");

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
      tray.text("One Pace extension active"),
      tray.button("Rescan Files", { onClick: "rescan" }),
    ], { gap: 8 });
  });

  tray.onClick(() => {
    tray.open();
  });

  ctx.registerEventHandler("rescan", () => {
    const count = $database.localFiles.findBy(
      (lf: any) => lf.mediaId === 2185 && lf.path.includes("[One Pace]")
    ).length;
    console.log(`[One Pace] Rescanned: ${count} files`);
    ctx.toast.success(`Found ${count} One Pace files`);
  });
});
