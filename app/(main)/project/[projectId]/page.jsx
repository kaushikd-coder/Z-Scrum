import { getProject } from '@/actions/projects';
import { notFound } from 'next/navigation'
import React from 'react'
import SprintCreationForm from '../_components/create-sprint';
import SprintBoard from '../_components/sprint-board';

const ProjectPage = async ({ params }) => {

    const { projectId } = params;

    const project = await getProject(projectId);

    if (!projectId) {
        notFound()
    }


    return (
        <>
            <div className='container mx-auto'>
                {/* Sprint Creation */}
                <SprintCreationForm
                    projectTitle={project.name}
                    projectId={projectId}
                    projectKey={project.key}
                    sprintKey={project.sprints?.length + 1}
                />
                {/* Sprint Board */}
                {project.sprints.length > 0 ? (
                    <>
                        <SprintBoard
                            sprints={project.sprints}
                            projectId={projectId}
                            orgId={project.organizationId}
                        />
                    </>
                ) : (
                    <div>
                        Create a Sprint from button above
                    </div>
                )}
            </div>

        </>
    )
}

export default ProjectPage