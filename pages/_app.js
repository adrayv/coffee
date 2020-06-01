import 'antd/dist/antd.css';
import '~/styles/vars.css';
import '~/styles/global.css';
import GlobalLayout from '~/components/GlobalLayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
