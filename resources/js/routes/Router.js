import notfound from '../components/layouts/notfound.vue'

// frontend routes //

import Home from '../components/layouts/frontend/Home.vue'
import AboutUs from '../components/layouts/frontend/AboutUs.vue'
import Courses from '../components/layouts/frontend/Courses.vue'
import Projects from '../components/layouts/frontend/Projects.vue'
import ContactUs from '../components/layouts/frontend/ContactUs.vue'

// backend routes//

import Register from '../components/layouts/auth/Register.vue'
import Login from '../components/layouts/auth/Login.vue'
import Dashboard from '../components/layouts/backend/Dashboard.vue'
import SiteSetting from '../components/layouts/backend/pages/SiteSetting.vue'
import CoursesList from '../components/layouts/backend/pages/courses/CoursesList.vue'
import AddCourse from '../components/layouts/backend/pages/courses/AddCourse.vue'
import StudentsList from '../components/layouts/backend/pages/students/StudentsList.vue'
import AddStudent from '../components/layouts/backend/pages/students/AddStudent.vue'
import ProjectsList from '../components/layouts/backend/pages/projects/ProjectsList.vue'
import AddProject from '../components/layouts/backend/pages/projects/AddProject.vue'
import TeamMembersList from '../components/layouts/backend/pages/team/TeamMembersList.vue'
import AddTeamMember from '../components/layouts/backend/pages/team/AddTeamMember.vue'
import TestimonialsList from '../components/layouts/backend/pages/testimonials/TestimonialsList.vue'
import AddTestimonial from '../components/layouts/backend/pages/testimonials/AddTestimonial.vue'




import {createRouter, createWebHistory} from 'vue-router';
import Swal from 'sweetalert2';

const checkUserType=(to,from,next)=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.role == 'admin'){
    console.log('ok');
    next();
    }else{
    Swal.fire({
    icon: "error",
    title: "Oops…",
    text: "You are not authorized to access this page!",
    });
    next('/');
    }
}


const routes =[
    {
        name:'notfound',
        path:'/:pathMatch(.*)*',
        component: notfound,
    },

    {
        name:'Register',
        path:'/auth/register',
        component: Register,
    },

    {
        name:'Login',
        path:'/auth/login',
        component: Login,
    },

    {
        name:'Home',
        path:'/',
        component: Home,
    },

    {
        name:'AboutUs',
        path:'/about-us',
        component: AboutUs,
    },

    {
        name:'Courses',
        path:'/courses',
        component: Courses,
    },

    {
        name:'Projects',
        path:'/projects',
        component: Projects,
    },

    {
        name:'ContactUs',
        path:'/contact-us',
        component: ContactUs,
    },

    {
        name:'Dashboard',
        path:'/admin/dashboard',
        component: Dashboard,
        beforeEnter:checkUserType,
    },

    {
        name:'SiteSetting',
        path:'/admin/site-setting',
        component: SiteSetting,
    },

    {
        name:'CoursesList',
        path:'/admin/courses/list',
        component: CoursesList,
    },

    {
        name:'AddCourse',
        path:'/admin/courses/add-course',
        component: AddCourse,
    },

    {
        name:'StudentsList',
        path:'/admin/students/list',
        component: StudentsList,
    },

    {
        name:'AddStudent',
        path:'/admin/students/add-student',
        component: AddStudent,
    },

    {
        name:'ProjectsList',
        path:'/admin/projects/list',
        component: ProjectsList,
    },

    {
        name:'AddProject',
        path:'/admin/projects/add-project',
        component: AddProject,
    },

    {
        name:'TeamMembersList',
        path:'/admin/team-members/list',
        component: TeamMembersList,
    },

    {
        name:'AddTeamMember',
        path:'/admin/team-members/add-member',
        component: AddTeamMember,
    },
    
    {
        name:'TestimonialsList',
        path:'/admin/testimonials/list',
        component: TestimonialsList,
    },

    {
        name:'AddMember',
        path:'/admin/testimonials/add-testimonial',
        component: AddTestimonial,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated && to.path !== '/auth/login' && to.path !== '/auth/register') {
    next('/auth/login');
    } else {
    next();
    }
    });

export default router;