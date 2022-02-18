import Container from "../../components/utils/container";
import ProjectCard from "../../components/cards/ProjectCard";
import Heading from "../../components/slices/heading";
import Apply from "../../components/slices/apply";

const projects = [
	{
		id: 'flippies',
		name: 'Orion Money',
		description: 'Thetan Arena is an esport game based on blockchain technology',
		logo: 'https://storage.googleapis.com/polkastarter-production-assets/aovnyvd72hvhc5l8ab2e9404jq0h',
		cover: 'https://storage.googleapis.com/polkastarter-production-assets/nfy5nnqh2v55q1dbfcynrqeipzcb'
	},
	{
		id: 'flippies',
		name: 'Wilder World',
		description: 'An NFT P2E Metaverse with unique microverses & living NFT pets',
		logo: 'https://storage.googleapis.com/polkastarter-production-assets/hm8u0aagfyir5n1dbfpizmpe0fu9',
		cover: 'https://storage.googleapis.com/polkastarter-production-assets/jiq12ptcg86gphxhluu1b69sp33q'
	},
	{
		id: 'flippies',
		name: 'Tina Arena',
		description: 'Thetan Arena is an esport game based on blockchain technology',
		logo: 'https://storage.googleapis.com/polkastarter-production-assets/tcwqly5amlb5m9b5uge0zfl4iwxm',
		cover: 'https://storage.googleapis.com/polkastarter-production-assets/icaa44umdc3z299t6bwd5z81n67v'
	},
]

const Projects = () => <>
	<section className="pt-10">
		<Container>
			<Heading tagline={"Parasol Launchpad"} title={"Upcoming Projects"} description={"There is the list of the next IDOs and projects on Parasol."} />
			<div className="grid grid-cols-3 gap-7">
				{projects.map((project) => (
					<ProjectCard Id={project.id} Name={project.name} Description={project.description} Logo={project.logo} Cover={project.cover} />
				))}
			</div>
		</Container>
	</section>
	<Apply />
</>

export default Projects;