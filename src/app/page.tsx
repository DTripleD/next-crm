import AddCompanyButton from './components/add-company-button';
import ClientComponent from './components/client-component';
import ServerComponent from './components/server-components';
import ServerComponentCopy from './components/server-components-copy';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
