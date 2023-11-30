import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../components/Navbar/Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Navbar> = {
	title: 'Example/Navbar',
	component: Navbar,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		label: 'Navbar',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Navbar',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Navbar',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Navbar',
	},
};
