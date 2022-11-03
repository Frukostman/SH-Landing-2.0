import { About } from "../../components/About/About"
import { Header } from "../../components/Header/Header"
import { SkillList } from '../../components/SkillList/SkillList';
import { Portfolio } from '../../components/Portfolio/Portfolio';
import { Contact } from '../../components/Contact/Contact';

export const Content = () => {
    return (
        <>
            <Header/>
            <About/>
            <SkillList />
            <Portfolio />
            <Contact />
        </> 
    )
}
