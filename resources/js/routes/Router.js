import notfound from '../components/layouts/notfound.vue'

// frontend routes //

import Home from '../components/layouts/frontend/Home.vue'
import AboutUs from '../components/layouts/frontend/AboutUs.vue'
import Courses from '../components/layouts/frontend/Courses.vue'
import Projects from '../components/layouts/frontend/Projects.vue'
import ContactUs from '../components/layouts/frontend/ContactUs.vue'
import CourseDetails from '../components/layouts/frontend/CourseDetails.vue'
import ProjectDetails from '../components/layouts/frontend/ProjectDetails.vue'

// backend routes//

// auth //
import Register from '../components/layouts/auth/Register.vue'
import Login from '../components/layouts/auth/Login.vue'

// admin //
import Dashboard from '../components/layouts/backend/Dashboard.vue'
import Add_SiteSetting from '../components/layouts/backend/pages/Add_SiteSetting.vue'
import Edit_SiteSetting from '../components/layouts/backend/pages/Edit_SiteSetting.vue'

//courses//
import CoursesList from '../components/layouts/backend/pages/courses/CoursesList.vue'
import AddCourse from '../components/layouts/backend/pages/courses/AddCourse.vue'
import EditCourse from '../components/layouts/backend/pages/courses/EditCourse.vue'

//services//
import ServicesList from '../components/layouts/backend/pages/services/ServicesList.vue'
import AddService from '../components/layouts/backend/pages/services/AddService.vue'
import EditService from '../components/layouts/backend/pages/services/EditService.vue'

//partners//
import PartnersList from '../components/layouts/backend/pages/partners/PartnersList.vue'
import AddPartner from '../components/layouts/backend/pages/partners/AddPartner.vue'
import EditPartner from '../components/layouts/backend/pages/partners/EditPartner.vue'

//students//
import StudentsList from '../components/layouts/backend/pages/students/StudentsList.vue'
import AddStudent from '../components/layouts/backend/pages/students/AddStudent.vue'
import EditStudent from '../components/layouts/backend/pages/students/EditStudent.vue'

//project//
import ProjectsList from '../components/layouts/backend/pages/projects/ProjectsList.vue'
import AddProject from '../components/layouts/backend/pages/projects/AddProject.vue'
import EditProject from '../components/layouts/backend/pages/projects/EditProject.vue'

//team//
import TeamMembersList from '../components/layouts/backend/pages/team/TeamMembersList.vue'
import AddTeamMember from '../components/layouts/backend/pages/team/AddTeamMember.vue'
import EditTeamMember from '../components/layouts/backend/pages/team/EditTeamMember.vue'
//Reviews//
import ReviewsList from '../components/layouts/backend/pages/reviews/ReviewsList.vue'
import AddReview from '../components/layouts/backend/pages/reviews/AddReview.vue'
import EditReview from '../components/layouts/backend/pages/reviews/EditReview.vue'




import {createRouter, createWebHistory} from 'vue-router';


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
        name:'CourseDetails',
        path:'/course-details/:id',
        component: CourseDetails,
    },

    {
        name:'ProjectDetails',
        path:'/project-details/:id',
        component: ProjectDetails,
    },

    {
        name:'Dashboard',
        path:'/admin/dashboard',
        component: Dashboard,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'Add_SiteSetting',
        path:'/admin/setting/add-setting',
        component: Add_SiteSetting,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'Edit_SiteSetting',
        path:'/admin/setting/edit-setting',
        component: Edit_SiteSetting,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'CoursesList',
        path:'/admin/courses/list',
        component: CoursesList,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'AddCourse',
        path:'/admin/courses/add-course',
        component: AddCourse,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'EditCourse',
        path:'/admin/courses/edit-course/:id',
        component: EditCourse,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'PartnersList',
        path:'/admin/partners/list',
        component: PartnersList,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'AddPartner',
        path:'/admin/partners/add-partner',
        component: AddPartner,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'EditPartner',
        path:'/admin/partners/edit-partner/:id',
        component: EditPartner,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'ServicesList',
        path:'/admin/services/list',
        component: ServicesList,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'AddService',
        path:'/admin/services/add-service',
        component: AddService,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'EditService',
        path:'/admin/services/edit-service/:id',
        component: EditService,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'StudentsList',
        path:'/admin/students/list',
        component: StudentsList,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'AddStudent',
        path:'/admin/students/add-student',
        component: AddStudent,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'EditStudent',
        path:'/admin/students/edit-student/:id',
        component: EditStudent,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'ProjectsList',
        path:'/admin/projects/list',
        component: ProjectsList,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'AddProject',
        path:'/admin/projects/add-project',
        component: AddProject,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'EditProject',
        path:'/admin/projects/edit-project/:id',
        component: EditProject,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'TeamMembersList',
        path:'/admin/team/list',
        component: TeamMembersList,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'AddTeamMember',
        path:'/admin/team/add-member',
        component: AddTeamMember,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'EditTeamMember',
        path:'/admin/team/edit-member/:id',
        component: EditTeamMember,
        meta : {
            requiresAuth : true
        }
    },
    
    {
        name:'ReviewsList',
        path:'/admin/reviews/list',
        component: ReviewsList,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'AddReview',
        path:'/admin/reviews/add-review',
        component: AddReview,
        meta : {
            requiresAuth : true
        }
    },

    {
        name:'EditReview',
        path:'/admin/reviews/edit-review/:id',
        component: EditReview,
        meta : {
            requiresAuth : true
        }
    },
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

// Route Guard for Authentication
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('auth');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'Login' });
      } else {
        next();
      }
    
});


export default router;