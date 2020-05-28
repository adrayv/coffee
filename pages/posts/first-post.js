import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Text = styled.h1`
  color: red;
`;

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first post</title>
      </Head>
      <Text>First Post</Text>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
