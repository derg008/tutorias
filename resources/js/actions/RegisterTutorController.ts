import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \RegisterTutorController::create
 * @see [unknown]:0
 * @route '/register-tutor'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/register-tutor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \RegisterTutorController::create
 * @see [unknown]:0
 * @route '/register-tutor'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \RegisterTutorController::create
 * @see [unknown]:0
 * @route '/register-tutor'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \RegisterTutorController::create
 * @see [unknown]:0
 * @route '/register-tutor'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \RegisterTutorController::create
 * @see [unknown]:0
 * @route '/register-tutor'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \RegisterTutorController::create
 * @see [unknown]:0
 * @route '/register-tutor'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \RegisterTutorController::create
 * @see [unknown]:0
 * @route '/register-tutor'
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
const RegisterTutorController = { create }

export default RegisterTutorController