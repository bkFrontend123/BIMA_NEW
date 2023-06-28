  import Head from 'next/head'
  import '@/assets/css/globals.css'
  import '@/assets/css/base.css'
  import '@/assets/css/custom.css'
  import '@/assets/webfont/stylesheet.css'
  import '@/assets/css/icons.css'
  
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
            {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> */}
          </Head>
          {/*<Navbar  />*/}
            <Component {...pageProps} />
          {/*<Footer  />*/}
        </div>
  );
}

