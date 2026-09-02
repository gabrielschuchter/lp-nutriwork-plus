import { SITE_URL } from '../../src/lib/news/site';

// Microsoft Clarity: carregado apenas na landing page (pages/index).
// O snippet oficial injeta um <script async> dinamicamente, garantindo
// carregamento assíncrono sem bloquear a renderização.
const clarityScript = `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","yc4ejnv39h");`;

export function Head() {
  return <>
    <link rel="canonical" href={`${SITE_URL}/`} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${SITE_URL}/`} />
    <script dangerouslySetInnerHTML={{ __html: clarityScript }} />
  </>;
}
