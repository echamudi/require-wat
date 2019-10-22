(module
  (memory $myMemory 1)

  ;; Addition
  (data (i32.const 0) "hello")

  ;; Export function and memory
  (export "myMemory" (memory $myMemory))
)
