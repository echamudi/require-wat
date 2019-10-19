(module
  (memory $myMemory 1)

  ;; Addition
  (func $storeHello
    (i32.store8 (i32.const 0) (i32.const 0x68)) ;; h
    (i32.store8 (i32.const 1) (i32.const 0x65)) ;; e
    (i32.store8 (i32.const 2) (i32.const 0x6C)) ;; l
    (i32.store8 (i32.const 3) (i32.const 0x6C)) ;; l
    (i32.store8 (i32.const 4) (i32.const 0x6F)) ;; o
  )

  ;; Export function and memory
  (export "myMemory" (memory $myMemory))
  (export "storeHello" (func $storeHello))
)
