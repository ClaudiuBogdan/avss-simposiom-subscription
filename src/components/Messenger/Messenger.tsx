import { webConfig } from "@/config/web";
import { FC, useEffect } from "react";

export const Messenger: FC = () => {
  useEffect(() => {
    if(!webConfig.facebook.pageId) return;
    
    var chatbox = document.getElementById("fb-customer-chat");
    if (!chatbox) return;
    chatbox.setAttribute("page_id", webConfig.facebook.pageId);
    chatbox.setAttribute("attribution", "biz_inbox");

    if (!window) return;

    // @ts-ignore
    window.fbAsyncInit = function () {
      // @ts-ignore
      FB.init({
        xfbml: true,
        version: "v15.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;

      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/ro_RO/sdk/xfbml.customerchat.js";
      fjs.parentNode!.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return (
    <>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};
