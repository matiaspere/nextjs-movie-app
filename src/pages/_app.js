import Layout from '@layout/MainLayout.jsx';
import '@styles/global.scss';
import AppContext from 'context/AppContext';
import useFetch from 'hooks/useFetch';



function MyApp({ Component, pageProps }) {
  const value = useFetch();
  return (
    <>
      <AppContext.Provider value={value}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
