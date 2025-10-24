export interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
  emoji?: string;
}

export interface TestimonialsProps {
    heading: string;
    description: string;
    items: Testimonial[];
}

const testimonialsItems: Testimonial[] = [
	{
		id: 1,
		name: 'Sarah Johnson',
		username: '@sarahj_dev',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=Sarah',
		content:
			'Examaxis helped me pass my AWS Solutions Architect exam on the first try! The practice questions were spot-on and really prepared me for the real thing.',
		emoji: '🎯',
	},
	{
		id: 2,
		name: 'Michael Chen',
		username: '@mchen_cloud',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=Michael',
		content:
			"I'm really enjoying Examaxis. It's a game changer. With their practice exams, I have an incentive to break my study down into many small, focused sessions. This way, Examaxis can track each little progress. So when I hit save, only the topics I changed needs to be reviewed. Really speeds things up!",
	},
	{
		id: 3,
		name: 'Emma Williams',
		username: '@emmaw_tech',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=Emma',
		content: 'Examaxis is the best platform for cloud certification prep. Period.',
	},
	{
		id: 4,
		name: 'David Martinez',
		username: '@davidm_azure',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=David',
		content:
			'Just setting up Examaxis for my Azure certification and it\'s already cut my study time in half and saved me hundreds of dollars on other prep courses.',
	},
	{
		id: 5,
		name: 'Priya Patel',
		username: '@priyap_gcp',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=Priya',
		content: 'Wait I kinda love Examaxis 💙',
	},
	{
		id: 6,
		name: 'James Wilson',
		username: '@jameswilson',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=James',
		content:
			'I love a comprehensive exam prep platform, having everything in one place powered by Examaxis 🔥',
	},
	{
		id: 7,
		name: 'Lisa Anderson',
		username: '@lisaanderson',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=Lisa',
		content:
			'If Examaxis has a million users, then I am one of them. If Examaxis has ten users, then I am one of them. If Examaxis has only one user then that is me. If Examaxis has no users, then that means I am no longer on earth. If the world is against Examaxis, then I am against the world.',
	},
	{
		id: 8,
		name: 'Robert Kim',
		username: '@robertk_tech',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=Robert',
		content:
			'😍 @Examaxis saved us 67 HOURS of study time since we adopted it. That\'s a team of only 4 full-time students. Nuts.',
		emoji: '😍',
	},
	{
		id: 9,
		name: 'Alex Thompson',
		username: '@alexthompson',
		avatar: 'https://avatar.iran.liara.run/public/boy?username=Alex',
		content: 'The quality of questions on Examaxis is unmatched. Passed my GCP certification with flying colors!',
	},
]

export const testimonials: TestimonialsProps = {
    heading: "What people say about Examaxis",
    description: "Join thousands of successful certified professionals",
    items: testimonialsItems,
}