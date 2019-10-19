(module
  (memory $myMemory 1)

  ;; Addition
  (func $sumOfFiveNumbers (result i32)
    (i32.load8_u (i32.const 0))
    (i32.load8_u (i32.const 1))
    (i32.load8_u (i32.const 2))
    (i32.load8_u (i32.const 3))
    (i32.load8_u (i32.const 4))
    i32.add
    i32.add
    i32.add
    i32.add
  )

  ;; Export function and memory
  (export "myMemory" (memory $myMemory))
  (export "sumOfFiveNumbers" (func $sumOfFiveNumbers))
)
