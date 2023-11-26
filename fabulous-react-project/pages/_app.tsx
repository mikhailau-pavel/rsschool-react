import React from "react";
import {wrapper} from '../src/store/store'
import Layout from "../components/layout";

export function App({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
     ;
  }
  
  export default wrapper.withRedux(App);