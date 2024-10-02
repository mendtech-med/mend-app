import React from 'react';

interface ProjectThemeSvgProps {
    color: string;
}

const lightenColor = (color: string, percent: number) => {
    if (color.toUpperCase() === "#FFFFFF") {
        // If the color is white, return a slightly darker shade instead
        const shade = Math.max(0, 255 - Math.round(2.55 * percent)).toString(16).padStart(2, '0');
        return `#${shade}${shade}${shade}`;
    }

    let num = parseInt(color.replace("#", ""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = ((num >> 8) & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;

    return "#" + (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1).toUpperCase();
}

const ProjectThemeSvg: React.FC<ProjectThemeSvgProps> = ({ color }) => {
    const color2 = lightenColor(color, 10); // 20% lighter
    const color3 = lightenColor(color, 20); // 40% lighter

    return (
        <svg
            width="156"
            height="117"
            viewBox="0 0 156 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M65.3832 5.34719C49.0873 6.84776 21.7765 31.344 1.87481 38.522C-2.41097 40.0678 -4.37438 44.8511 -4.81691 51.406C-7.84162 96.2087 40.8903 124.95 85.7944 124.724C118.35 124.561 148.431 122.372 143.887 114.57C134.407 98.293 153.804 55.4395 147.885 41.9185C141.965 28.3976 102.482 57.1158 91.8 48.8477C81.1182 40.5796 81.6792 3.84661 65.3832 5.34719Z"
                fill={color}
            />
            <path
                d="M56.0893 29.9151C39.7934 31.4157 12.4826 55.9119 -7.41914 63.09C-11.7049 64.6358 -13.6683 69.4191 -14.1109 75.9739C-17.1356 120.777 31.5964 149.518 76.5005 149.292C109.056 149.129 139.137 146.94 134.593 139.138C125.113 122.861 144.51 80.0074 138.591 66.4865C132.671 52.9656 93.1879 81.6837 82.5061 73.4156C71.8242 65.1475 72.3852 28.4146 56.0893 29.9151Z"
                fill={color2}
            />
            <path
                d="M44.5922 46.1501C28.2963 47.6507 0.985515 72.147 -18.9162 79.325C-23.202 80.8708 -25.1654 85.6541 -25.6079 92.2089C-28.6326 137.012 20.0993 165.753 65.0034 165.527C97.5592 165.364 127.64 163.175 123.096 155.373C113.616 139.096 133.013 96.2424 127.094 82.7215C121.174 69.2006 81.6909 97.9187 71.009 89.6506C60.3272 81.3825 60.8882 44.6496 44.5922 46.1501Z"
                fill={color3}
            />
        </svg>
    );
};

export default ProjectThemeSvg;
