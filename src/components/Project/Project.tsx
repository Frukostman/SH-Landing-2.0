import './project.scss'
// import '../../assets/images/'

// interface Project {
//     id: number,
//     url: string,
//     name: string,
//     description: string,
//     linkTo: string,
//     repository: string,
//     category: string,
//     skills: string,
// }

export const Project:any = ({project}:any) => {

    let {url, name, description, linkTo, repository, category, skills,} = project

    url = `../../src/assets/${url}`

    return (
        <li>
            <div className="project-card">
                {/* <img src={`${process.env.PUBLIC_URL}/${project.url}`} alt={project.name} className="img-fluid project-image"></img> */}
                <img src={`../../src/assets/${url}`} alt={name} className="img-fluid project-image"></img>
                <h5 className="project-title">{name}</h5>
                <div className="project-info">
                    <p className="project-category">{category}</p>
                    <p className="project-description">{description}</p>
                    <p className="project-skills">{skills}</p>
                </div>
                <div className="project-buttons">
                    {repository ?
                        <a href={repository} target="blank" className="button-repo">Repo</a>
                        : ""}
                    <a href={linkTo} target="blank" className="button-link">Link</a>
                </div>
            </div>
        </li>
    )
}
