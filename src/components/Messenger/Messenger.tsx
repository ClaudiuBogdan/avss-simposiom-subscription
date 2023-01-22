import { config } from "@/config";
import Script from "next/script";
import { FC } from "react";

export const Messenger: FC = () => {
  return (
    <>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script strategy="lazyOnload" id="fb-script-container">
        {`
            <!-- Messenger Chat plugin Code -->
        <div id="fb-root"></div>
    
        <!-- Your Chat plugin code -->
        <div id="fb-customer-chat" class="fb-customerchat">
        </div>
    
        <script>
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "${config.facebook.pageId}}");
          chatbox.setAttribute("attribution", "biz_inbox");
        </S>
    
        <!-- Your SDK code -->
        <S>
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v15.0'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/ro_RO/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        </script>
            `}
      </Script>
    </>
  );
};
