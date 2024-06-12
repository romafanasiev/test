import { ProtectedPage } from '../components/client';
import { Footer, Header } from '../components/server';

const UsersLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <ProtectedPage>
    <Header />
    <main className="grow">{children}</main>
    <Footer />
  </ProtectedPage>
);

export default UsersLayout;

