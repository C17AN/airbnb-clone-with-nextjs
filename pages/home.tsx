import React from "react";
import Head from "next/head";

interface Props {}

const home = (props: Props) => {
  return (
    <div>
      <Head>
        <meta name="description" content="신나게 홈을 배워 보아요" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>dd</div>
    </div>
  );
};

export default home;
