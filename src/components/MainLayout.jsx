import Content from "./Content"
import Nav from "./Nav/Nav"
import Sidebar from "./Sidebar"

function MainLayout() {
  return (
    <section id="main-layout">
        <Nav></Nav>
        <Sidebar></Sidebar>
        <Content></Content>
    </section>
  )
}

export default MainLayout