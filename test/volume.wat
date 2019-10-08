(module
  (import "calculate" "positivePower3" 
    (func $power3 (param i32) (result i32))
  )
  (func (export "cubeVolume") (param $side i32) (result i32)
    local.get $side
    call $power3
  )
)
