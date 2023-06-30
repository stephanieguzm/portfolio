import { ProjectInterface } from '@/app/projects/[id]/page';
import fsPromises from 'fs/promises';
import path from 'path'

export async function getAllProjects() : Promise<ProjectInterface[]> {
  // Get the path of the json file
  const filePath : string = path.join(process.cwd(), 'json/data.json');
  // Read the json file
  const jsonData : Buffer = await fsPromises.readFile(filePath);
  // Parse data as json
  const projectsData = JSON.parse(jsonData.toString());

  return projectsData as ProjectInterface[]
}

export async function getSingleProject({ params }: { params: { id: string } }) : Promise<ProjectInterface> {
  const results = await getAllProjects()
  const projectsData = results
  const match = projectsData.find(project => {
    return project.id === params.id
  })

  return match as ProjectInterface
}