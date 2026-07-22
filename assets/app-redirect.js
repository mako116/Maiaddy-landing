(function () {
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.maiaddy.app";
  const APP_STORE_URL =
    "https://apps.apple.com/ng/app/maiaddy-get-your-loccode/id6737343500";

  function getAppStoreUrl() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    return isIOS ? APP_STORE_URL : PLAY_STORE_URL;
  }

  function updateLoccodeLinks() {
    const targetUrl = getAppStoreUrl();
    document.querySelectorAll("a").forEach(function (btn) {
      const text = (btn.textContent || "").trim().toLowerCase();
      const href = (btn.getAttribute("href") || "").toLowerCase();
      if (
        text.includes("get your loccode") ||
        text.includes("get loccode") ||
        href.includes("get-loccode") ||
        btn.classList.contains("js-get-loccode")
      ) {
        btn.href = targetUrl;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateLoccodeLinks);
  } else {
    updateLoccodeLinks();
  }

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (link) {
      const text = (link.textContent || "").trim().toLowerCase();
      const href = (link.getAttribute("href") || "").toLowerCase();
      if (
        text.includes("get your loccode") ||
        text.includes("get loccode") ||
        href.includes("get-loccode") ||
        link.classList.contains("js-get-loccode")
      ) {
        const targetUrl = getAppStoreUrl();
        link.href = targetUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    }
  });
})();
