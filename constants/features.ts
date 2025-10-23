import { BarChart3, BookOpen, Clock, FileCheck, Target, Trophy, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface FeatureProps {
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export interface FeaturesSectionProps {
    heading: string;
    description: string;
    items: FeatureProps[];
}

const featuresItems: FeatureProps[] = [
	{
		icon: FileCheck,
		title: 'Realistic Mock Tests',
		description:
			'Simulate real exam conditions with timed mock tests matching the format and difficulty of actual exams. Get exam-ready with comprehensive practice tests.',
	},
	{
		icon: Clock,
		title: 'Smart Note-Taking',
		description:
			'Create and organize notes for any question or topic. Your notes are saved automatically and synced across all devices, helping you build a personalized study guide.',
	},
	{
		icon: Trophy,
		title: '95% Success Rate',
		description:
			'Join thousands of successful candidates who passed their certification exams on the first attempt. Our proven question bank and practice methodology ensures exam success.',
	},
	{
		icon: BookOpen,
		title: 'Comprehensive Question Bank',
		description:
			'Access 1000s of real exam questions for top cloud certifications like AWS, Azure, and Google Cloud — updated to match the latest exam patterns.',
	},
	{
		icon: Target,
		title: 'Practice by Topic',
		description:
			'Focus on specific topics and weak areas with our topic-wise practice mode. Track your progress and identify areas that need improvement with detailed analytics.',
	},
	{
		icon: BarChart3,
		title: 'Analytics Performance',
		description:
			'Track your progress with comprehensive analytics showing topic performance, time management, accuracy and improvement trends to optimize your study strategy.',
	},
]

export const features: FeaturesSectionProps = {
    heading: 'Everything You Need to Easily Pass Any Certification Exam',
    description: 'Powerful features designed to help you prepare smarter and ace your IT certification exams',
    items: featuresItems,
}