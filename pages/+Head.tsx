const themeBootScript = `(() => {
  const storageKey = 'nutriwork-theme';
  let theme = 'light';
  try {
    const savedTheme = localStorage.getItem(storageKey);
    theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';
  } catch {
    theme = 'light';
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute('content', theme === 'light' ? '#f4f7fc' : '#02040a');
})();`;

const metaPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1516307990311398');
fbq('track', 'PageView');`;

export function Head() {
  return <>
    <meta name="theme-color" content="#f4f7fc" />
    <meta name="robots" content="index, follow" />
    <meta property="og:locale" content="pt_BR" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap" rel="stylesheet" />
    <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
    <script dangerouslySetInnerHTML={{ __html: metaPixelScript }} />
  </>;
}
