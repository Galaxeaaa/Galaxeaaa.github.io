type UserData = {
    name: string;
    avatarUrl: string;
    email: string;
    phone: string;
    address: string;
};

type Publication = {
    title: string;
    authors: string[];
    myid?: number;
    year: string;
    publisher: string;
    project_url?: string;
    paper_url: string;
    code_url?: string;
    desc: string;
};

type Project = {
    title: string;
    time: string;
    url: string;
    imgUrl: string;
    desc: string[];
};

type Experience = {
    title: string;
    type: string;
    company: string;
    location?: string;
    time: string;
    url: string;
    current?: boolean;
};

type About = {
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
    skills: [
        "Python",
        "C/C++",
        "PyTorch",
        "OpenCV",
        "Mitsuba",
        "OpenGL",
        "Unreal Engine 5",
        "Blender",
        "Docker",
        "TypeScript",
        "React",
    ],
    interests: [
        "Badminton",
        "Video Games",
        "Photography",
        "Poker",
        "Classical Music",
        "Cooking",
    ],
}

export const publications: Publication[] = [
    {
        title: "A Generalizable Light Transport 3D Embedding for Global Illumination",
        authors: ["Bing Xu", "Mukund Varma T", "Cheng Wang", "Tzumao Li", "Lifan Wu", "Bartlomiej Wronski", "Ravi Ramamoorthi", "Marco Salvi"],
        myid: 3,
        year: "2026",
        publisher: "ACM SIGGRAPH 2026",
        paper_url: "https://arxiv.org/abs/2510.18189",
        code_url: "Coming",
        desc: "Global light transport modeling on millions of triangles via a scalable 3D embedding with point clouds and linear-complexity transformers.",
    },
    {
        title: "HotSpot: Screened Poisson Equation for Signed Distance Function Optimization",
        authors: ["Zimo Wang*", "Cheng Wang*", "Taiki Yoshino", "Sirui Tao", "Ziyang Fu", "Tzu-Mao Li"],
        myid: 2,
        year: "2025",
        publisher: "CVPR 2025 (Highlight)",
        paper_url: "https://arxiv.org/abs/2411.14628",
        project_url: "https://zeamoxwang.github.io/HotSpot-CVPR25/",
        code_url: "https://github.com/Galaxeaaa/HotSpot",
        desc: "Neural Signed Distance Field optimization from point clouds with heat method.",
    },
    {
        title: "Near-Field Lighting Estimation via Ray Regression",
        authors: ["Cheng Wang", "Tzu-mao Li"],
        myid: 1,
        year: "2024",
        publisher: "Master Thesis",
        paper_url: "https://escholarship.org/uc/item/27v4090s",
        code_url: "https://github.com/Galaxeaaa/LightRayDiffusion",
        desc: "Better near-field lighting estimation by overparameterizing lighting locations as ray bundles.",
    },
    {
        title: "ZeroRF: Zero-shot Sparse View 360° Reconstruction",
        authors: ["Ruoxi Shi*", "Xinyue Wei*", "Cheng Wang", "Hao Su"],
        myid: 3,
        year: "2024",
        publisher: "CVPR 2024",
        paper_url: "https://arxiv.org/abs/2312.09249",
        project_url: "https://sarahweiii.github.io/zerorf/",
        code_url: "https://github.com/eliphatfs/zerorf",
        desc: "A sparse view 360° Neural Radiance Field reconstruction method inspired by Deep Image Prior.",
    },
]

export const projects: Project[] = [
    {
        title: "Volumetric Path Tracer",
        time: "2023",
        url: "https://github.com/Galaxeaaa/CSE272-lajolla",
        imgUrl: "/images/VolumetricPathTracing.png",
        desc: [
            "A volumetric path tracer that can handle multiple chromatic heterogeneous volumes with absorption and multiple-scattering, with both phase function sampling and next event estimation, based on an educational physically-based renderer, lajolla."
        ],
    },
    {
        title: "Autonomous Vehicle Motion Forecasting",
        time: "2023",
        url: "https://github.com/Galaxeaaa/cse251b-project",
        imgUrl: "/images/vehicle-trajectory-prediction.png",
        desc: [
            "A course project using deep learning models to forecast autonomous vehicle motion, predicting object positions three seconds ahead."
        ],
    },
    {
        title: "Implementation of Tensorial Radiance Field (TensoRF) with PyTorch",
        time: "2022",
        url: "https://github.com/Galaxeaaa/TensoRF",
        imgUrl: "/images/TensoRF.png",
        desc: [
            "TensoRF represents a radiance field by matrix-vector and vector-vector combinations of tensors. Compared to MLP based NeRF, it is more efficient while preserving comparable quality without customized CUDA implementation."
        ],
    },
    {
        title: "Real-Time Texture-Space Subsurface Scattering",
        time: "2021 - 2022",
        url: "https://github.com/Galaxeaaa/tssss",
        imgUrl: "/images/TSSSS.jpg",
        desc: [
            "An efficient method to compute convolution of radiance map and weight kernel in texture space. By pre-calculating weight kernels with Burley's normalized diffusion profile and applying wavelet transformation, the method significantly reduced time complexity of convolution.",
            "Awarded the Outstanding Graduation Thesis of Zhejiang University Undergraduates in 2022.",
        ],
    },
    {
        title: "Tiled Forward Shading",
        time: "2021",
        url: "https://github.com/Galaxeaaa/ForwardPlus",
        imgUrl: "/images/ForwardPlus.jpg",
        desc: [
            "An implementation of tiled forward rendering and tiled deferred rendering, with optimized light culling pass by using multiple frustum dividing and light-frustum intersection strategies.",
        ],
    },
    {
        title: "Cyber Creed",
        time: "2021",
        url: "",
        imgUrl: "/images/CyberCreed.png",
        desc: [
            "A 3D computer game resembling Assassin's Creed with Unreal Engine 4.",
        ],
    },
    {
        title: "Medical Appointment System",
        time: "2021",
        url: "https://github.com/Galaxeaaa/MedicalAppointmentSystem-Frontend",
        imgUrl: "/images/HospitalWebsite.jpg",
        desc: [
            "A course project implementing a hospital website with Vue.js and Java, whose main functions including information viewing, registration appointment, online consultation, video diagnosis, online forum, etc.",
        ],
    },
    {
        title: "Petiu: Pet farewell service system",
        time: "2021",
        url: "https://weiranzhou.github.io/project-Petiu",
        imgUrl: "/images/Petiu.jpg",
        desc: [
            "An IOS App \"Petiu\" written in SwiftUI.",
            "Awarded Third Prize in the China Collegiate Computing Contest -- Mobile Application Innovation Contest held by Apple Inc. and Zhejiang University in 2021.",
        ],
    },
]

export const experiences: Experience[] = [
    {
        title: "Computer Vision Research Engineer",
        type: "company",
        company: "Dandy",
        location: "Remote, United States",
        time: "Apr 2025 - June 2026",
        url: "https://www.meetdandy.com/",
    },
    {
        title: "Research Assistant",
        type: "education",
        company: "UC San Diego",
        location: "CA, United States",
        time: "Aug 2024 - Apr 2025",
        url: "https://ucsd.edu",
    },
    {
        title: "Rendering Intern",
        type: "company",
        company: "Electronic Arts",
        location: "Remote, United States",
        time: "June 2023 - Sep 2023",
        url: "https://www.ea.com/",
    },
    {
        title: "M.S. in Computer Science",
        type: "education",
        company: "UC San Diego",
        location: "CA, United States",
        time: "Sep 2022 - June 2024",
        url: "https://ucsd.edu",
    },
    {
        title: "Rendering Engine Engineer Intern",
        type: "company",
        company: "RaysEngine",
        location: "Zhejiang, China",
        time: "Dec 2021 - Jun 2022",
        url: "https://www.raysengine.com/",
    },
    {
        title: "B.E. in Computer Science and Technology",
        type: "education",
        company: "Zhejiang University",
        location: "Zhejiang, China",
        time: "Sep 2018 - Jun 2022",
        url: "https://www.zju.edu.cn",
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

