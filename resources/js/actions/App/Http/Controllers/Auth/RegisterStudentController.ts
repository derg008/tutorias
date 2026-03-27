import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::create
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/register-student',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::create
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::create
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::create
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::create
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::create
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::create
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:18
 * @route '/register-student'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::store
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:29
 * @route '/register-student'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/register-student',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::store
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:29
 * @route '/register-student'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterStudentController::store
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:29
 * @route '/register-student'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::store
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:29
 * @route '/register-student'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisterStudentController::store
 * @see app/Http/Controllers/Auth/RegisterStudentController.php:29
 * @route '/register-student'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const RegisterStudentController = { create, store }

export default RegisterStudentController