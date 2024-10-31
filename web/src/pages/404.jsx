import { Button, Result } from 'antd';
import { history } from 'umi';

const NoFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Pagina non trovata, per favore inserisci l'indirizzo corretto."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Torna alla home
        </Button>
      }
    />
  );
};

export default NoFoundPage;
