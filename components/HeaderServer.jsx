import { checkUser } from '@/lib/checkUser';
import Header from './header';

const HeaderServer = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return <Header isAdminPage={isAdminPage} isAdmin={isAdmin} />;
};

export default HeaderServer