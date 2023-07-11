  import Head from 'next/head'
  import '@/assets/css/globals.css'
  import '@/assets/css/base.css'
  import '@/assets/css/custom.css'
  import '@/assets/webfont/stylesheet.css'
  import '@/assets/css/icons.css'
  import '@/assets/css/select-dropdown.css'
  import '@/assets/css/floating-form-input.css'
  import '@/assets/css/tooltip.css'
  
  import '@/assets/css/responsive.css'
  import '@/assets/css/responsiveFrontend.css'
  // import 'bootstrap/dist/css/bootstrap.min.css';

  import { Buffer } from 'buffer';
  global.Buffer = Buffer;
  
  // import { Layout } from "@/components";
  // import { StateContext } from "@/context/StateContext";
  export default function App({ Component, pageProps }) {
    
    return (
        <div>
          <Head>
            <title>Bimakavach</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="facebook-domain-verification" content="d5tm33wm098xzqg6nscrnghca3ikxq" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"></link>            
            {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" /> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PNXFZLT');`,
              }}
            />
          </Head>
          {/*<Navbar  />*/}
            <Component {...pageProps} />
          {/*<Footer  />*/}
        </div>
  );
}

