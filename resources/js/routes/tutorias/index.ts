import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TutoriaController::index
 * @see app/Http/Controllers/TutoriaController.php:13
 * @route '/tutorias'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/tutorias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TutoriaController::index
 * @see app/Http/Controllers/TutoriaController.php:13
 * @route '/tutorias'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TutoriaController::index
 * @see app/Http/Controllers/TutoriaController.php:13
 * @route '/tutorias'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TutoriaController::index
 * @see app/Http/Controllers/TutoriaController.php:13
 * @route '/tutorias'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TutoriaController::index
 * @see app/Http/Controllers/TutoriaController.php:13
 * @route '/tutorias'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TutoriaController::index
 * @see app/Http/Controllers/TutoriaController.php:13
 * @route '/tutorias'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TutoriaController::index
 * @see app/Http/Controllers/TutoriaController.php:13
 * @route '/tutorias'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\TutoriaController::create
 * @see app/Http/Controllers/TutoriaController.php:24
 * @route '/tutorias/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/tutorias/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TutoriaController::create
 * @see app/Http/Controllers/TutoriaController.php:24
 * @route '/tutorias/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TutoriaController::create
 * @see app/Http/Controllers/TutoriaController.php:24
 * @route '/tutorias/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TutoriaController::create
 * @see app/Http/Controllers/TutoriaController.php:24
 * @route '/tutorias/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TutoriaController::create
 * @see app/Http/Controllers/TutoriaController.php:24
 * @route '/tutorias/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TutoriaController::create
 * @see app/Http/Controllers/TutoriaController.php:24
 * @route '/tutorias/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TutoriaController::create
 * @see app/Http/Controllers/TutoriaController.php:24
 * @route '/tutorias/create'
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
* @see \App\Http\Controllers\TutoriaController::store
 * @see app/Http/Controllers/TutoriaController.php:35
 * @route '/tutorias'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/tutorias',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TutoriaController::store
 * @see app/Http/Controllers/TutoriaController.php:35
 * @route '/tutorias'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TutoriaController::store
 * @see app/Http/Controllers/TutoriaController.php:35
 * @route '/tutorias'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TutoriaController::store
 * @see app/Http/Controllers/TutoriaController.php:35
 * @route '/tutorias'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TutoriaController::store
 * @see app/Http/Controllers/TutoriaController.php:35
 * @route '/tutorias'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TutoriaController::show
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
export const show = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/tutorias/{tutoria}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TutoriaController::show
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
show.url = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tutoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    tutoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tutoria: args.tutoria,
                }

    return show.definition.url
            .replace('{tutoria}', parsedArgs.tutoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TutoriaController::show
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
show.get = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TutoriaController::show
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
show.head = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TutoriaController::show
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
    const showForm = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TutoriaController::show
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
        showForm.get = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TutoriaController::show
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
        showForm.head = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\TutoriaController::edit
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}/edit'
 */
export const edit = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/tutorias/{tutoria}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TutoriaController::edit
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}/edit'
 */
edit.url = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tutoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    tutoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tutoria: args.tutoria,
                }

    return edit.definition.url
            .replace('{tutoria}', parsedArgs.tutoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TutoriaController::edit
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}/edit'
 */
edit.get = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TutoriaController::edit
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}/edit'
 */
edit.head = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TutoriaController::edit
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}/edit'
 */
    const editForm = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TutoriaController::edit
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}/edit'
 */
        editForm.get = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TutoriaController::edit
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}/edit'
 */
        editForm.head = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\TutoriaController::update
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
export const update = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/tutorias/{tutoria}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TutoriaController::update
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
update.url = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tutoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    tutoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tutoria: args.tutoria,
                }

    return update.definition.url
            .replace('{tutoria}', parsedArgs.tutoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TutoriaController::update
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
update.put = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TutoriaController::update
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
update.patch = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\TutoriaController::update
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
    const updateForm = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TutoriaController::update
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
        updateForm.put = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\TutoriaController::update
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
        updateForm.patch = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\TutoriaController::destroy
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
export const destroy = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/tutorias/{tutoria}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TutoriaController::destroy
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
destroy.url = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tutoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    tutoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tutoria: args.tutoria,
                }

    return destroy.definition.url
            .replace('{tutoria}', parsedArgs.tutoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TutoriaController::destroy
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
destroy.delete = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TutoriaController::destroy
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
    const destroyForm = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TutoriaController::destroy
 * @see app/Http/Controllers/TutoriaController.php:0
 * @route '/tutorias/{tutoria}'
 */
        destroyForm.delete = (args: { tutoria: string | number } | [tutoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const tutorias = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default tutorias