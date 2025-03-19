import NavBar from "../Components/NavBar";
import ProviderExpediente from "../Provider/ProviderExpediente";
import ProviderUsuario from "../Provider/ProviderUsuario";

export default function  LayoutSecundario({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <ProviderUsuario>
      <ProviderExpediente> 
      <NavBar></NavBar>
      {children}
      </ProviderExpediente>
    </ProviderUsuario>
      
    </>
  );
}