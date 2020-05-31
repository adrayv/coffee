import 'antd/dist/antd.css';
import '~/styles/vars.css';
import '~/styles/global.css';
import { OrderProvider } from '~/hooks/useOrder';

export default function MyApp({ Component, pageProps }) {
  return (
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  );
}
