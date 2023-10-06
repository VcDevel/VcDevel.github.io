/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Vc", "index.html", [
    [ "Overview Documents", null, [
      [ "Introduction", "intro.html", [
        [ "Alignment", "intro.html#intro_alignment", [
          [ "What is Alignment", "intro.html#intro_alignment_background", null ],
          [ "Tools", "intro.html#intro_alignment_tools", null ]
        ] ]
      ] ],
      [ "Portability Issues", "portability.html", [
        [ "Compiler Quirks", "portability.html#portability_compilerquirks", null ]
      ] ],
      [ "Pre-defined Macros", "vcmacros.html", [
        [ "Implementation Identification", "vcmacros.html#vc_impl", null ],
        [ "Vector/Mask Sizes", "vcmacros.html#vc_size", null ],
        [ "Compiler Identification (and related)", "vcmacros.html#vc_compiler", null ],
        [ "Version Macros", "vcmacros.html#vc_version", null ],
        [ "Boilerplate Code Generation", "vcmacros.html#vc_boilerplate", null ]
      ] ],
      [ "Feature Macros", "featuremacros.html", [
        [ "Vc_IMPL", "featuremacros.html#set_vc_impl", null ],
        [ "Vc_NO_STD_FUNCTIONS", "featuremacros.html#Vc_NO_STD_FUNCTIONS", null ],
        [ "Vc_NO_VERSION_CHECK", "featuremacros.html#Vc_NO_VERSION_CHECK", null ],
        [ "Vc_CHECK_ALIGNMENT", "featuremacros.html#Vc_CHECK_ALIGNMENT", null ],
        [ "Vc_ENABLE_FLOAT_BIT_OPERATORS", "featuremacros.html#Vc_ENABLE_FLOAT_BIT_OPERATORS", null ]
      ] ],
      [ "Build System", "buildsystem.html", [
        [ "CMake Variables", "buildsystem.html#buildsystem_variables", null ],
        [ "CMake Macros", "buildsystem.html#buildsystem_macros", null ],
        [ "Using Vc without CMake", "buildsystem.html#buildsystem_other", null ]
      ] ],
      [ "Examples", "examples.html", "examples" ]
    ] ],
    [ "API Reference", "modules.html", "modules" ],
    [ "Indexes", null, [
      [ "Deprecated List", "deprecated.html", null ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ],
      [ "CurrentImplementation", "group__Utilities.html#gaf3e14167d841b235ddddfeee061e892f", null ],
      [ "double_v", "group__Vectors.html#ga0c29c10a0054260ee326ff12938243fa", null ],
      [ "float_v", "group__Vectors.html#ga5cf7c5a0dadbbbbcb9b69c5e42ee0528", null ],
      [ "int_v", "group__Vectors.html#gaff6f527c244d2e97ae290d2325de8ec0", null ],
      [ "uint_v", "group__Vectors.html#gab04f66a2e5672fe27f27e9fbff5afcbc", null ],
      [ "short_v", "group__Vectors.html#ga357ea2ba8644fc80c7e7cf13069e6ed0", null ],
      [ "ushort_v", "group__Vectors.html#ga06b026f838dc9e1a7b8d76a89a852503", null ],
      [ "double_m", "group__Masks.html#ga786edb7297a37cee281c1270d72fd15e", null ],
      [ "float_m", "group__Masks.html#gab9a61667770e6aa34fbf79bd866c6125", null ],
      [ "int_m", "group__Masks.html#ga8f64c0d135eecd3d23614a429d2fe454", null ],
      [ "uint_m", "group__Masks.html#ga08780441d72903fe2a78c1f2fdec59e9", null ],
      [ "short_m", "group__Masks.html#ga035870cea90d9dcece5b998431579679", null ],
      [ "ushort_m", "group__Masks.html#gadffad75d23efd4c964bfbcf98fca09ce", null ],
      [ "vector", "group__Containers.html#ga83d044f9c3ad372b41050be88e9dc80a", null ],
      [ "VectorAlignedBase", "group__Utilities.html#gae0b1347db1c228fa9eed28bb263b7ce1", null ],
      [ "VectorAlignedBaseT", "group__Utilities.html#gaaf50674e74fd61521eed0b6efc9fca66", null ],
      [ "MemoryAlignedBase", "group__Utilities.html#ga199bb5c0b1cdad984233700da70c7f72", null ],
      [ "MemoryAlignedBaseT", "group__Utilities.html#ga99b565288c63cae7e848763fd59f7fe3", null ],
      [ "DefaultLoadTag", "namespaceVc.html#a16cb0f3fcfe32601de1b5da10df5d59d", null ],
      [ "DefaultStoreTag", "namespaceVc.html#a4d7c710aa2754261eefbc420320aaaa3", null ],
      [ "simdize", "group__Simdize.html#ga3ac19e54411a781274a792efe3c3e319", null ],
      [ "span", "group__Containers.html#gab3e24ff44f51a475b91bc8ceb0b69106", null ],
      [ "llong", "group__Utilities.html#ga48d34e0d0fc1c5727f8bd72aba96b636", null ],
      [ "ullong", "group__Utilities.html#ga389d2ab33cbce94847a01e0b75f29627", null ],
      [ "ulong", "group__Utilities.html#ga441b2f7db117201ab36246e7692a5974", null ],
      [ "uint", "group__Utilities.html#ga69aa29b598b851b0640aa225a9e5d61d", null ],
      [ "ushort", "group__Utilities.html#gae666ff9c44d45e6b7b6b8ed4340dd9c0", null ],
      [ "uchar", "group__Utilities.html#gae48ac2456c5ad6c956fef86e7bef3a21", null ],
      [ "schar", "group__Utilities.html#ga84375f7ee02e11ca98cc738c420f6fcf", null ],
      [ "MallocAlignment", "group__Utilities.html#gaebce8b3227fdcca97fba94556a1b2461", [
        [ "AlignOnVector", "group__Utilities.html#ggaebce8b3227fdcca97fba94556a1b2461aea1085049aede31b7bbb8c5a06815446", null ],
        [ "AlignOnCacheline", "group__Utilities.html#ggaebce8b3227fdcca97fba94556a1b2461ae5f918b27baba790e8931d2f1173905f", null ],
        [ "AlignOnPage", "group__Utilities.html#ggaebce8b3227fdcca97fba94556a1b2461ae4cff9800dfef630b91432a0eda00f4b", null ]
      ] ],
      [ "Implementation", "group__Utilities.html#ga169eae84f24c38906074ff8edde32fd8", [
        [ "ScalarImpl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8af8eadb5528c544043ceb2e0bbe1615ac", null ],
        [ "SSE2Impl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a96e70e00d8209faf9f4f5d45d5fb2c91", null ],
        [ "SSE3Impl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a7d172cb38b02af566e6e256bc3c9fc6f", null ],
        [ "SSSE3Impl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a4f2b8ddd973d24ac7984678bf4a9bf7a", null ],
        [ "SSE41Impl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a42c84ad8cf63407232d74ccef344d1b4", null ],
        [ "SSE42Impl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a9ebefe4bccb3fb7ae762b9513f7d1f3e", null ],
        [ "AVXImpl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a43a1748f49066bcfb077da5844e5ac19", null ],
        [ "AVX2Impl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a0ec1beefc339f966fe6bc79f29157417", null ],
        [ "MICImpl", "group__Utilities.html#gga169eae84f24c38906074ff8edde32fd8a19fd24b45f41c9b525248c256328b67c", null ]
      ] ],
      [ "ExtraInstructions", "group__Utilities.html#ga4922572a6b9846b8c22af338b9441229", [
        [ "Float16cInstructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229acaab28ad7711fd8542454766cef23f2c", null ],
        [ "Fma4Instructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229a785542afdf7805511a1c0d1679a9d6ea", null ],
        [ "XopInstructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229a439e5c3106f696004e78b4f79e5918b6", null ],
        [ "PopcntInstructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229aee6cf7ebb69a99ec4ffbdea63d0d7a76", null ],
        [ "Sse4aInstructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229af7a4407dc74ee8444bffedca74ca942d", null ],
        [ "FmaInstructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229a84146480ab7df66c222fdda2f7a513da", null ],
        [ "VexInstructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229ab32e7f3ac1f6c7aac5d6d20ae435f84a", null ],
        [ "Bmi2Instructions", "group__Utilities.html#gga4922572a6b9846b8c22af338b9441229a28c60a6d86220ee7bbbbbecac4db015f", null ]
      ] ],
      [ "extraInstructionsSupported", "group__Utilities.html#ga0494be780a8f52b408e0e06195ea8c21", null ],
      [ "isImplementationSupported", "group__Utilities.html#gab884a7bd8c51ecfbafd6dbea18bb89da", null ],
      [ "bestImplementationSupported", "group__Utilities.html#gaa45419820f4ea76d4de6fd9d50a99fdd", null ],
      [ "currentImplementationSupported", "group__Utilities.html#ga99b49ea15bcdc5244d4f1b30e596cfcf", null ],
      [ "versionString", "group__Utilities.html#gad8b1e885028993da5830464a001123d2", null ],
      [ "versionNumber", "group__Utilities.html#ga10a6a21a4d2522fe9101344eca0848d9", null ],
      [ "operator<<", "group__Vectors.html#ga4f7cc29beb3735b74ef138a66a4329ac", null ],
      [ "operator<<", "group__Masks.html#ga9f36123339ef60273ae1cf717ae0bc3e", null ],
      [ "simd_for_each", "group__Utilities.html#ga10c3796ebe8e9402589ebcdc3d7f291e", null ],
      [ "deinterleave", "group__Vectors.html#ga1ece12006bd1f9558c4e6370abe5c5f0", null ],
      [ "iif", "group__Utilities.html#ga522eef0739b7d2ec6f15279c99be3608", null ],
      [ "iif", "group__Utilities.html#ga522eef0739b7d2ec6f15279c99be3608", null ],
      [ "iif", "group__Utilities.html#gacf6ecc8fd6b6bc8978ab3328ffdbdf62", null ],
      [ "interleave", "group__Utilities.html#gaa80969d72f5a3dc0b1b20f9db9035c48", null ],
      [ "make_interleave_wrapper", "namespaceVc.html#ad57f0f0c05f766cb58c01a6d831ebdab", null ],
      [ "makeContainer", "group__Containers.html#ga8f111591b38ea2110c202b66abd3abd8", null ],
      [ "malloc", "group__Utilities.html#ga0edd4f5b27c3713aaa0f9950b60e6026", null ],
      [ "free", "group__Utilities.html#ga02df2f4144ab266d7f9e65fa3aef070b", null ],
      [ "all_of", "group__Utilities.html#gaff53f2c94209b49c88ef19d7004d1225", null ],
      [ "all_of", "group__Utilities.html#ga5c11d2373ee63b998032086ca8eff990", null ],
      [ "any_of", "group__Utilities.html#ga6c419070cb21f3f9698041332c311dd4", null ],
      [ "any_of", "group__Utilities.html#ga987ef53cca76351756ac45f24c653365", null ],
      [ "none_of", "group__Utilities.html#gaf08f66c6cce8a6745d462d7dcbe9148d", null ],
      [ "none_of", "group__Utilities.html#ga8ceb42d4e7446fe6895b875a7bf81b34", null ],
      [ "some_of", "group__Utilities.html#ga7f671db27bd9c478afe3e80b3f8111a3", null ],
      [ "some_of", "group__Utilities.html#gaf2f19c87677614a7cb67a88f74b1bced", null ],
      [ "simd_cast", "namespaceVc.html#a63bfcd6356c01e01296f5db3c86bd43a", null ],
      [ "simd_cast", "namespaceVc.html#adb4e7042030e56e39539a1433e8c03e0", null ],
      [ "min", "group__SimdArray.html#ga2aab75e4afa35c3331deb8639e2b0000", null ],
      [ "max", "group__SimdArray.html#ga253756bfaa995b548006eca952694c3a", null ],
      [ "operator+", "group__SimdArray.html#ga80b968160a571d3b623d975e0ae534ad", null ],
      [ "operator-", "group__SimdArray.html#ga6285d807d3c5f9de8f2c0253bdfc43b0", null ],
      [ "operator*", "group__SimdArray.html#ga77fd8e8ad57334f44ef418e47a744c5a", null ],
      [ "operator/", "group__SimdArray.html#ga4ed64945c6ce6249d2da3bd0167a70bf", null ],
      [ "operator%", "group__SimdArray.html#gacc40395260df985dd651c548ecb71fce", null ],
      [ "operator|", "group__SimdArray.html#ga7573fd09a39db6c6e6a250cd5a19e590", null ],
      [ "operator&", "group__SimdArray.html#gadf855a2bfef6e84c14040e33ce94ea46", null ],
      [ "operator^", "group__SimdArray.html#gaf548f2963027b17a46bcf450b71a22c0", null ],
      [ "operator==", "group__SimdArray.html#gafc47c0cdf2eafb9335b55353fe529854", null ],
      [ "operator!=", "group__SimdArray.html#gae682ac4f5a88d97c32e7a44e955172da", null ],
      [ "operator<=", "group__SimdArray.html#ga99162763213932a50a0a4edb1003d49e", null ],
      [ "operator>=", "group__SimdArray.html#ga46470081be873074c4c58b53bfed4ce1", null ],
      [ "operator<", "group__SimdArray.html#ga489fa9274b7127370c1f14740ecc420b", null ],
      [ "operator>", "group__SimdArray.html#gaa9afb59ea3d267bbd773650016dcf1dd", null ],
      [ "abs", "group__SimdArray.html#gaca60c415008bf8fa7584b96d63273bc9", null ],
      [ "asin", "group__SimdArray.html#ga8d20c72a003514c3dc9bb46a07b77479", null ],
      [ "atan", "group__SimdArray.html#ga6a4d1542a5f997ce28e470f64d89783b", null ],
      [ "atan2", "group__SimdArray.html#ga0ac6d145a987be25120dc4dfbd909a05", null ],
      [ "ceil", "group__SimdArray.html#ga232616ce5323c40c7f6edf5e3bc9a187", null ],
      [ "copysign", "group__SimdArray.html#ga62b791fecb11fa3190ebbee40ed5e4d4", null ],
      [ "cos", "group__SimdArray.html#ga69b999a4bbde0b766930400dab181b3c", null ],
      [ "exp", "group__SimdArray.html#ga10fdc8103aef52c55d562c3470dc9613", null ],
      [ "exponent", "group__SimdArray.html#gafd60ed43c87e39c56d77a6372446cb7c", null ],
      [ "floor", "group__SimdArray.html#ga87d15fc96c6fe5a36df45ec7a0af46a6", null ],
      [ "fma", "group__SimdArray.html#ga55df0d76ce69e713bb167c5f33aa4ecb", null ],
      [ "isfinite", "group__SimdArray.html#gadd36270b7d578c98faf6d5bb84effec5", null ],
      [ "isinf", "group__SimdArray.html#ga3382e6db83580758f941712598d4b0bf", null ],
      [ "isnan", "group__SimdArray.html#gaae7b193c02d5519390426f667a53f51f", null ],
      [ "isnegative", "group__SimdArray.html#ga742ea12afe5302a00bd002f681788b75", null ],
      [ "frexp", "group__SimdArray.html#gacf1ec0827117429126da573dc28ede39", null ],
      [ "ldexp", "group__SimdArray.html#gafd5008f63774d4d2a28b60c7094b5a9f", null ],
      [ "log", "group__SimdArray.html#ga50ca5d42dc4bfd9125c82d9489785fb3", null ],
      [ "log10", "group__SimdArray.html#ga6a8e40c7956fd0cf5c5d5a81dc462ed6", null ],
      [ "log2", "group__SimdArray.html#gaa399f72ba9d55f3b265f87e3b5dbfccf", null ],
      [ "reciprocal", "group__SimdArray.html#ga36ee147be9812d939978395e96ca9653", null ],
      [ "round", "group__SimdArray.html#gae2d0e4660b71feddde552a2974db3896", null ],
      [ "rsqrt", "group__SimdArray.html#gaea57cafc480c6afed73429b1c0f7d8f9", null ],
      [ "sin", "group__SimdArray.html#ga47ded4a72c2f1452d789c528e7b094dc", null ],
      [ "sincos", "group__SimdArray.html#ga966c8787de0b75905d6a0bcac439cd38", null ],
      [ "sqrt", "group__SimdArray.html#ga7a6c5f5edc8022f95100272604ca7674", null ],
      [ "trunc", "group__SimdArray.html#ga12d14666e1baee24304e4770f0276b14", null ],
      [ "assign", "namespaceVc.html#af2490610651e58a7734cfaef7435152d", null ],
      [ "extract", "namespaceVc.html#a4d06abca5f5c4923802bddfe443855fd", null ],
      [ "sin", "group__Math.html#ga0a26b8891c8c2ab217c734c1dce2590e", null ],
      [ "cos", "group__Math.html#ga0045b39ca118119c04c08decf6867728", null ],
      [ "asin", "group__Math.html#ga90b3d243df19919d9abb752fd956be5a", null ],
      [ "atan", "group__Math.html#ga991ff9c7d88834e55576b171bb63cbc0", null ],
      [ "atan2", "group__Math.html#gad3ad5fd6cfc833464d4957dd2a39424a", null ],
      [ "sincos", "group__Math.html#gacb03e010b36fb653c42fca336673cad6", null ],
      [ "copysign", "group__Math.html#ga6347f1ac77d8f0bad0d25776196b0ea0", null ],
      [ "exponent", "group__Math.html#ga271993627ffa60fd01e49b864610af12", null ],
      [ "isnegative", "group__Math.html#ga7a0e5039343271c87b94fd9a0651adbb", null ],
      [ "reinterpret_components_cast", "group__Utilities.html#ga2757700841c3cd5df46343a3cbfc10d9", null ],
      [ "where", "group__Utilities.html#ga27306798525d378031e6e7933addc928", null ],
      [ "VectorAlignment", "group__Vectors.html#gab31cdcfd0e89e57edf426bfbf3ca843b", null ],
      [ "MemoryAlignment", "group__Vectors.html#gaac286912729d28478c8c9a1ac97a92ac", null ],
      [ "Aligned", "group__Utilities.html#ga9e53bd74b9a47cb8f16bf12018c3670e", null ],
      [ "Unaligned", "group__Utilities.html#ga91774bc3f3fc00d22deff300919d811c", null ],
      [ "Streaming", "group__Utilities.html#gadc83bcfec8f15d1d02fb53baa3f38185", null ],
      [ "PrefetchDefault", "group__Utilities.html#ga3bed7ba639e9ef78c79421c801b43e59", null ],
      [ "Zero", "group__Utilities.html#gad24df8f04b4b68f7e992aeb8b449cdf2", null ],
      [ "One", "group__Utilities.html#ga7dc0e380f66c4c791b7bf95df154b3c6", null ],
      [ "IndexesFromZero", "group__Utilities.html#ga2fc610927782c03b1049f2898b2e5821", null ],
      [ "Class List", "annotated.html", [
        [ "Class List", "annotated.html", "annotated_dup" ],
        [ "Class Index", "classes.html", null ],
        [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
        [ "Class Members", "functions.html", [
          [ "All", "functions.html", "functions_dup" ],
          [ "Functions", "functions_func.html", "functions_func" ],
          [ "Variables", "functions_vars.html", null ],
          [ "Typedefs", "functions_type.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"Allocator_source.html",
"classVc_1_1SimdMaskArray.html#a0e2c15c517007b91c37b2aa68bf2484a",
"group__SimdArray.html#gaa9afb59ea3d267bbd773650016dcf1dd"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';