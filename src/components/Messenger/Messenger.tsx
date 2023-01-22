import { FC, useEffect } from "react";

export const Messenger: FC = () => {
  useEffect(() => {
    // @ts-ignore
    window.fbAsyncInit = function () {
      //@ts-ignore
      FB.init({
        xfbml: true,
        version: "v15.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
    // @ts-ignore
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    // @ts-ignore
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });

  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat");
    // @ts-ignore
    chatbox.setAttribute("page_id", "102809999197189");
    // @ts-ignore
    chatbox.setAttribute("attribution", "biz_inbox");
  }, []);

  return (
    <>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};
