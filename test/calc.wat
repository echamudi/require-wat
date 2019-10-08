(module
  ;; Addition
  (func $add (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )
  ;; Subtract
  (func $sub (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.sub)

  ;; Export functions
  (export "add" (func $add))
  (export "sub" (func $sub))
)
