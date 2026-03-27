import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
 * @route '/register'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
 * @route '/register'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
 * @route '/register'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
 * @route '/register'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
 * @route '/register'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \RegisterTutorController::tutor
 * @see [unknown]:0
 * @route '/register-tutor'
 */
export const tutor = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tutor.url(options),
    method: 'get',
})

tutor.definition = {
    methods: ["get","head"],
    url: '/register-tutor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \RegisterTutorController::tutor
 * @see [unknown]:0
 * @route '/register-tutor'
 */
tutor.url = (options?: RouteQueryOptions) => {
    return tutor.definition.url + queryParams(options)
}

/**
* @see \RegisterTutorController::tutor
 * @see [unknown]:0
 * @route '/register-tutor'
 */
tutor.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tutor.url(options),
    method: 'get',
})
/**
* @see \RegisterTutorController::tutor
 * @see [unknown]:0
 * @route '/register-tutor'
 */
tutor.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tutor.url(options),
    method: 'head',
})

    /**
* @see \RegisterTutorController::tutor
 * @see [unknown]:0
 * @route '/register-tutor'
 */
    const tutorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: tutor.url(options),
        method: 'get',
    })

            /**
* @see \RegisterTutorController::tutor
 * @see [unknown]:0
 * @route '/register-tutor'
 */
        tutorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tutor.url(options),
            method: 'get',
        })
            /**
* @see \RegisterTutorController::tutor
 * @see [unknown]:0
 * @route '/register-tutor'
 */
        tutorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tutor.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    tutor.form = tutorForm
/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::student
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
export const student = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: student.url(options),
    method: 'get',
})

student.definition = {
    methods: ["get","head"],
    url: '/register-student',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::student
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
student.url = (options?: RouteQueryOptions) => {
    return student.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::student
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
student.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: student.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::student
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
student.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: student.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::student
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
    const studentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: student.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::student
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
        studentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: student.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::student
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
        studentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: student.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    student.form = studentForm
const register = {
    store: Object.assign(store, store),
tutor: Object.assign(tutor, tutor),
student: Object.assign(student, student),
}

export default register