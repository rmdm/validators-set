(function(factory) {

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory()
    })
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  }

}(function(vdtrs) {

    var validators = {
        min: {
            check: function (value, limit) {
                return Number(value) >= Number(limit)
            },
            msg: {
                1: [
                    ['должно быть не менее'],
                    ['должно быть не менее значения из поля']
                ]
            }
        },
        max: {
            check: function (value, limit) {
                return Number(value) <= Number(limit)
            },
            msg: {
                1: [
                    ['не должно превышать'],
                    ['не должно превышать значения из поля']
                ]
            }
        },
        range: {
            check: function (value, from, to) {
                return Number(value) >= Number(from) && Number(value) <= Number(to)
            },
            msg: {
                2: [
                    [
                        'от',
                        'до'
                    ], [
                        'от значения из поля',
                        'до значения из поля'
                    ]
                ]
            }
        },
        lengthRange: {
            check: function (value, from, to) {
                var s = String(value)
                return s.length >= from && s.length <= to
            },
            msg: {
                2: [
                    [
                        'число символов от',
                        'до'
                    ], [
                        'число символов от значения из поля',
                        'до значения из поля'
                    ]
                ]
            }
        },
        length: {
            check: function (value, limit) {
                return String(value).length === limit
            },
            msg: {
                1: [
                    [
                        'число символов должно быть равно'
                    ], [
                        'число символов должно быть равно значению из поля'
                    ]
                ]
            }
        },
        string: {
            check: function (value) {
                return typeof value === 'string'
            },
            msg: {
                0: 'не строка'
            }
        },
        number: {
            check: function (value) {
                return !isNaN(value)
            },
            msg: {
                0: 'не число'
            }
        },
        date: { // TBD
            check: function (value) {                
                return true
            }, 
            msg: {
                0: 'не дата'
            }
        },
        custom: {
            check: function (value, f) {
                return f(value)
            },
            msg: {
                0: 'неверное значение'
            }
        },
        required: {
            check: function (value) {
                return value !== undefined && value !== null
            },
            msg: {
                0: 'обязательное'
            }
        }
    }

    if (vdtrs) {
        Object
            .keys(validators)
            .forEach(function (v) {
                vdtrs[v] = validators[v]
            })
    }

    return validators

}))
