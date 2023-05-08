<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <p class="title">
                Find Your Dream Job Today !
                </p>
                <p class="subtitle">
                Apply For Any Vacancy Below
                </p>
            </div>
        </section>
        <NewVacancy v-if="isAdmin" @save="handleSubmit"/>
        <ListVacancy v-for="vacancy in vacancies" :isAdmin="isAdmin" :key="vacancy.id" :vacancy="vacancy" @delete="handleDelete"/>
    </div>
    </template>
    <script>
    import NewVacancy from '../components/NewVacancy.vue'
    import ListVacancy from '../components/ListVacancy.vue'
    import { vacancies } from '../../data'
    export default{
        components:{
            NewVacancy,ListVacancy
        },
        data(){
            return{
                vacancies,
                isAdmin:true
            }
        },
        methods:{
            handleSubmit(formData){
                this.vacancies.unshift(formData);
            },
            handleDelete(vacancyId){
                this.vacancies = this.vacancies.filter(vacancy => vacancy.id !== vacancyId);
            }
        }
    }
    </script>