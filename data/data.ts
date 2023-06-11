import { type } from "os";

type UserData = {
    name: string;
    avatarUrl: string;
    email: string;
    phone: string;
    address: string;
};

type Project = {
    title: string;
    time: string;
    link: string;
    imgUrl: string;
    description: string[];
};

type Experience = {
    title: string;
    catagory: string;
    company: string;
    year: string;
    companyLink: string;
    desc: string;
    current?: boolean;
};

type About = {
    description: string[];
    interests: string[];
    skills: string[];
};

export const userData: UserData = {
    name: "Cheng Wang",
    avatarUrl: "/images/wc.jpg",
    email: "galaxea1111@gmail.com",
    phone: "+1 8582149117",
    address: "San Diego, California, United States",
};

export const about: About = {
    description: [
        "Hi! I'm Cheng Wang. I'm currently a M.S. student at University of California San Diego. Before that, I guaduated from Chu Kochen Honors College of Zhejiang University, majoring in Computer Science and Technology. Through my education, I've taken a huge interest in visual computing, especially in novel view synthesis and inverse rendering. I'm driven to make people's lives happier and easier through technology."
    ],
    interests: [
        "Computer Graphics",
        "Computer Vision",
        "Badminton",
        "View Synthesis",
        "Inverse Rendering",
        "Computer Games",
        "Classical Music",
    ],
    skills: [
        "C/C++",
        "Python",
        "PyTorch",
        "LaTeX",
        "CUDA",
        "OpenGL",
        "Unreal Engine",
        "OpenCV",
        "Html",
        "JavaScript",
        "Next.js",
        "SwiftUI",
    ]
}

export const projects: Project[] = [
    {
        title: "Volumetric Path Tracing",
        time: "2023",
        link: "https://github.com/Galaxeaaa/CSE272-lajolla",
        imgUrl: "/images/VolumetricPathTracing.png",
        description: [
            "I implemented volumetric path tracing that can handle multiple chromatic heterogeneous volumes with absorption and multiple-scattering, with both phase function sampling and next event estimation, based on an educational physically-based renderer, lajolla."
        ],
    },
    {
        title: "Implementation of Tensorial Radiance Field (TensoRF) with PyTorch",
        time: "2022",
        link: "https://github.com/Galaxeaaa/TensoRF",
        imgUrl: "/images/TensoRF.png",
        description: [
            "I implemented Tensorial Radiance Field (TensoRF) following the work of Chen et al. TensoRF represents a radiance field by matrix-vector and vector-vector combinations of tensors. Compared to MLP based NeRF, it is more efficient while preserving comparable quality without customized CUDA implementation."
        ],
    },
    {
        title: "Real-Time Texture-Space Subsurface Scattering",
        time: "2021 - 2022",
        link: "https://github.com/Galaxeaaa/tssss",
        imgUrl: "/images/TSSSS.jpg",
        description: [
            "I applied a new, efficient method which performs convolution of radiance map and weight kernel in texture space. By pre-calculating weight kernels with Burley's normalized diffusion profile and applying wavelet transformation, the method significantly reduced time complexity of convolution.",
            "Awarded the Outstanding Graduation Thesis of Zhejiang University Undergraduates in 2022.",
        ],
    },
    {
        title: "Tiled Forward Shading",
        time: "2021",
        link: "https://github.com/Galaxeaaa/ForwardPlus",
        imgUrl: "/images/ForwardPlus.jpg",
        description: [
            "I implemented tiled forward rendering and tiled deferred rendering according to existing papers, and optimized light culling pass by using multiple frustum dividing and light-frustum intersection strategies. Afterwards, I conducted experiments to compare the performance of the strategies mentioned above. Finally I transplanted the algorithms aborementioned to android devices.",
        ],
    },
    {
        title: "Cyber Creed",
        time: "2021",
        link: "",
        imgUrl: "/images/CyberCreed.png",
        description: [
            "We designed and implemented a 3D computer game resembling Assassin's Creed with Unreal Engine 4.",
            "Worked in a group of five I mainly focused on scene and level design, enemy animation and behavior design, special effect design based on particle system, etc. And I assisted to complete other modules in the game.",
        ],
    },
    {
        title: "Medical Appointment System",
        time: "2021",
        link: "https://github.com/Galaxeaaa/MedicalAppointmentSystem-Frontend",
        imgUrl: "/images/HospitalWebsite.jpg",
        description: [
            "I led a 20-people team and developed a hospital website based on Vue.js and Java, whose main functions including information viewing, registration appointment, online consultation, video diagnosis, online forum, etc.",
            "I participated in front-end programming, back-end programming and the design and maintenance of the cloud database.",
        ],
    },
    {
        title: "Petiu: Pet farewell service system",
        time: "2021",
        link: "",
        imgUrl: "/images/Petiu.jpg",
        description: [
            "Worked in a group of three, I designed and developed IOS App \"Petiu\" with SwiftUI.",
            "We attended China Collegiate Computing Contest -- Mobile Application Innovation Contest held by Apple Inc. and Zhejiang University in 2021, and were awarded Third Prize.",
        ],
    },
]

export const experiences: Experience[] = [
    {
        title: "Software Engineer Intern",
        catagory: "company",
        company: "Electronic Arts, CA, United States",
        year: "2023",
        companyLink: "https://www.ea.com/",
        desc: "Incoming intern.",
        current: true,
    },
    {
        title: "M.S. in Computer Science",
        catagory: "education",
        company: "University of California San Diego, CA, United States",
        year: "2022 - Present",
        companyLink: "https://ucsd.edu",
        desc: "Contributed to subsurface scattering rendering in our engine.",
        current: true,
    },
    {
        title: "Rendering Engine Engineer Intern",
        catagory: "company",
        company: "RaysEngine, Zhejiang, China",
        year: "2021 - 2022",
        companyLink: "https://www.raysengine.com/",
        desc: "Contributed to subsurface scattering rendering in our engine.",
    },
    {
        title: "B.E. in Computer Science and Technology",
        catagory: "education",
        company: "Zhejiang University, Zhejiang, China",
        year: "2018 - 2022",
        companyLink: "https://www.zju.edu.cn",
        desc: "Major in Computer Science and Technology with a GPA of 3.9.",
    },
    // {
    //     title: "High School",
    //     catagory: "education",
    //     company: "Yangzi High School Affiliated to Nanjing Normal University, Jiangsu, China",
    //     year: "2015 - 2018",
    //     companyLink: "http://www.njyzzx.com/",
    //     desc: "",
    // },
]

