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
      [ "InterleavedMemoryWrapper", "classVc_1_1Common_1_1InterleavedMemoryWrapper.html", "classVc_1_1Common_1_1InterleavedMemoryWrapper" ],
      [ "MemoryVector", "classVc_1_1Common_1_1MemoryVector.html", "classVc_1_1Common_1_1MemoryVector" ],
      [ "Memory", "classVc_1_1Common_1_1Memory.html", "classVc_1_1Common_1_1Memory" ],
      [ "Memory< V, Size, 0u, InitPadding >", "classVc_1_1Common_1_1Memory_3_01V_00_01Size_00_010u_00_01InitPadding_01_4.html", "classVc_1_1Common_1_1Memory_3_01V_00_01Size_00_010u_00_01InitPadding_01_4" ],
      [ "Memory< V, 0u, 0u, true >", "classVc_1_1Common_1_1Memory_3_01V_00_010u_00_010u_00_01true_01_4.html", "classVc_1_1Common_1_1Memory_3_01V_00_010u_00_010u_00_01true_01_4" ],
      [ "MemoryBase", "classVc_1_1Common_1_1MemoryBase.html", "classVc_1_1Common_1_1MemoryBase" ],
      [ "operator<<", "group__Utilities.html#ga088f96c2eb27c9e1807156fd1211cb1d", null ],
      [ "prefetchForOneRead", "group__Utilities.html#gae7f7849b78b35dbad9ac6a5134344501", null ],
      [ "prefetchForModify", "group__Utilities.html#ga26078dd5d6dce8a1322e5f5c93cc29ee", null ],
      [ "prefetchClose", "group__Utilities.html#ga7cf037dfb8b593e6029960a9cd30525c", null ],
      [ "prefetchMid", "group__Utilities.html#gaa12f10ef289f28b765cc1957ed1c5064", null ],
      [ "prefetchFar", "group__Utilities.html#ga853925b65d3bf768f025612ca35b7b9a", null ],
      [ "operator|", "loadstoreflags_8h.html#a9e1b024c8a980a20406283996aa5ab5b", null ],
      [ "Iterator< T, N, M, V, Size, std::bidirectional_iterator_tag >", "classVc_1_1SimdizeDetail_1_1IteratorDetails_1_1Iterator_3_01T_00_01N_00_01M_00_01V_00_01Size_00_a8e6b375765169ea94ea503eff96e9d3.html", "classVc_1_1SimdizeDetail_1_1IteratorDetails_1_1Iterator_3_01T_00_01N_00_01M_00_01V_00_01Size_00_a8e6b375765169ea94ea503eff96e9d3" ],
      [ "Iterator< T, N, M, V, Size, std::random_access_iterator_tag >", "classVc_1_1SimdizeDetail_1_1IteratorDetails_1_1Iterator_3_01T_00_01N_00_01M_00_01V_00_01Size_00_7facb3411c829fda8a09bd4c73445b8b.html", "classVc_1_1SimdizeDetail_1_1IteratorDetails_1_1Iterator_3_01T_00_01N_00_01M_00_01V_00_01Size_00_7facb3411c829fda8a09bd4c73445b8b" ],
      [ "shifted", "group__Simdize.html#gad1128ea6dca92d04e8e62b92e5cb9f19", null ],
      [ "swap", "group__Simdize.html#ga0517cc110689711d04e7096d4b6201dc", null ],
      [ "swap", "group__Simdize.html#ga3d6d182e679baadfd2727835eb67afd0", null ],
      [ "swap", "group__Simdize.html#gad2a4e95e190a4980a65dae8d403ec87c", null ],
      [ "has_no_allocated_data_impl", "structVc_1_1Traits_1_1has__no__allocated__data__impl.html", null ],
      [ "has_no_allocated_data", "structVc_1_1Traits_1_1has__no__allocated__data.html", null ],
      [ "is_simd_mask", "structVc_1_1Traits_1_1is__simd__mask.html", null ],
      [ "is_simd_vector", "structVc_1_1Traits_1_1is__simd__vector.html", null ],
      [ "isSimdArray", "structVc_1_1Traits_1_1isSimdArray.html", null ],
      [ "isSimdMaskArray", "structVc_1_1Traits_1_1isSimdMaskArray.html", null ],
      [ "simd_vector_size", "structVc_1_1Traits_1_1simd__vector__size.html", null ],
      [ "entry_type_of", "entry__type__of_8h.html#a2507585d827e7a3d663efb26a84ae4b1", null ],
      [ "CpuId", "classVc_1_1CpuId.html", null ],
      [ "Mask", "classVc_1_1Mask.html", "classVc_1_1Mask" ],
      [ "Vector", "classVc_1_1Vector.html", "classVc_1_1Vector" ],
      [ "SimdArray", "classVc_1_1SimdArray.html", "classVc_1_1SimdArray" ],
      [ "SimdMaskArray", "classVc_1_1SimdMaskArray.html", "classVc_1_1SimdMaskArray" ],
      [ "ImplementationT", "structVc_1_1ImplementationT.html", null ],
      [ "Allocator", "classVc_1_1Allocator.html", null ],
      [ "array", "structVc_1_1array.html", null ],
      [ "AlignedBase", "structVc_1_1AlignedBase.html", "structVc_1_1AlignedBase" ],
      [ "Exclusive", "structVc_1_1Exclusive.html", null ],
      [ "Shared", "structVc_1_1Shared.html", null ],
      [ "Prefetch", "structVc_1_1Prefetch.html", null ],
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
      [ "extraInstructionsSupported", "group__Utilities.html#ga382d9c155a283ee6e0b6db203f563ed0", null ],
      [ "isImplementationSupported", "group__Utilities.html#ga85daae7f9fd2e0509b317bbaaade7d90", null ],
      [ "bestImplementationSupported", "group__Utilities.html#ga4bd9588ab59f9c0316f73c4de8b328a4", null ],
      [ "currentImplementationSupported", "group__Utilities.html#gaf6a7f1d58808117b81cac7dcd054895e", null ],
      [ "versionString", "group__Utilities.html#ga5f60d3eac127759ab0725a07a27d564a", null ],
      [ "versionNumber", "group__Utilities.html#ga85dd3dea45052488a876ed2b14176f0c", null ],
      [ "operator<<", "group__Vectors.html#gad6b6fe2ff50125a8acc7c54b8e4e8423", null ],
      [ "operator<<", "group__Masks.html#gab3a6e71ba3ff708ad50041652fb7df5d", null ],
      [ "simd_for_each", "group__Utilities.html#ga29b42a4ce73749e7900407964e8bb468", null ],
      [ "deinterleave", "group__Vectors.html#ga3b78255a0fcbb76664c20b56ffe85d77", null ],
      [ "iif", "group__Utilities.html#ga83591f127b710d299dafa92f6b4d7d5c", null ],
      [ "iif", "group__Utilities.html#ga83591f127b710d299dafa92f6b4d7d5c", null ],
      [ "iif", "group__Utilities.html#ga62e83b56d82bdc33c674d246f1d02909", null ],
      [ "interleave", "group__Utilities.html#gaf9579a3d550ede4c21c20ee5dcb64512", null ],
      [ "make_interleave_wrapper", "namespaceVc.html#a087cedae2d143e901643b4b1200a01fe", null ],
      [ "makeContainer", "group__Containers.html#gaa184da6ae406dc089a92e650b84ae986", null ],
      [ "malloc", "group__Utilities.html#ga3ad68314ae283bc298864bf18b3aa8a4", null ],
      [ "free", "group__Utilities.html#gaee7f695ddd66d27230262733d9727435", null ],
      [ "all_of", "group__Utilities.html#gaccfe8b53188a645a5c78e283defb0d23", null ],
      [ "all_of", "group__Utilities.html#ga6ec7a6f4bff7ae67660a62ab0f3d325e", null ],
      [ "any_of", "group__Utilities.html#ga0e357178e07b595d2e7879ca2b2c62e0", null ],
      [ "any_of", "group__Utilities.html#gae493dec4ade732c6dbcc8232984736c5", null ],
      [ "none_of", "group__Utilities.html#gabe433dbbaa1f39731be6d183269cee3d", null ],
      [ "none_of", "group__Utilities.html#gac158e87aaeb3b48d2eed8e2b2ed2a616", null ],
      [ "some_of", "group__Utilities.html#ga0d1f3affaf171f27a677d71501feb7ca", null ],
      [ "some_of", "group__Utilities.html#gafbc58eaa9b950fbdd74931ffe2d28f27", null ],
      [ "simd_cast", "namespaceVc.html#a61262fcc2d367c5df6daca30d9fec43d", null ],
      [ "simd_cast", "namespaceVc.html#aa1011f75ce8f7c0da7e9de2e3776dbd0", null ],
      [ "min", "group__SimdArray.html#ga2aab75e4afa35c3331deb8639e2b0000", null ],
      [ "max", "group__SimdArray.html#ga253756bfaa995b548006eca952694c3a", null ],
      [ "operator+", "group__SimdArray.html#ga44ad1a978cb7403c99e30a9603c3cbf8", null ],
      [ "operator-", "group__SimdArray.html#gac21a224a42178602234ea9e4a5a25c29", null ],
      [ "operator*", "group__SimdArray.html#gaf9fd9ddfee22a39aba4aff656c991392", null ],
      [ "operator/", "group__SimdArray.html#ga7e6b9b75b0e360dd2870a97eea1ce584", null ],
      [ "operator%", "group__SimdArray.html#gaa381024280b357bc45ac5c3393fc0022", null ],
      [ "operator|", "group__SimdArray.html#ga1edb0cad0c29ca82c58bf9325d3ee12a", null ],
      [ "operator&", "group__SimdArray.html#gaa73cd786e8a21b6bbcf1f31aec7e1a1f", null ],
      [ "operator^", "group__SimdArray.html#gaff5b099251465e654b1823ffbf79f631", null ],
      [ "operator==", "group__SimdArray.html#gadf80a87e185730c114ec7053fb770b5b", null ],
      [ "operator!=", "group__SimdArray.html#ga7e06e1b9d3afe2f426c84f7c118ed0bb", null ],
      [ "operator<=", "group__SimdArray.html#gaa3745538a664644c14f4a27b4e9f4238", null ],
      [ "operator>=", "group__SimdArray.html#ga198cbd2ca4f3de75efd9dcaf4fb9ee08", null ],
      [ "operator<", "group__SimdArray.html#ga9e055e35447acfbcbc53948132aeef58", null ],
      [ "operator>", "group__SimdArray.html#ga69acacfd02bca93d1e5dc537fe7d76bf", null ],
      [ "abs", "group__SimdArray.html#ga0ad66d5fa732e0d35d7ef96308fde396", null ],
      [ "asin", "group__SimdArray.html#ga2c12844afd924e4039858039bb553ccd", null ],
      [ "atan", "group__SimdArray.html#gaa895e91d4466d215b53c4fbb8d76d6d3", null ],
      [ "atan2", "group__SimdArray.html#ga325bffb257f6e1c82db33ebc13d1b2f7", null ],
      [ "ceil", "group__SimdArray.html#ga5fc3d0a73e51ea22d05346d8b8d02156", null ],
      [ "copysign", "group__SimdArray.html#gafe8a351e6bc509fd629ab71c80f7af7f", null ],
      [ "cos", "group__SimdArray.html#gaf06c3de5c93ae773bade1e2711bb202b", null ],
      [ "exp", "group__SimdArray.html#ga85615a4990d37be6e5340ffe6907c4a7", null ],
      [ "exponent", "group__SimdArray.html#ga9f7dc6beff2cff75ff84a71d0d549cee", null ],
      [ "floor", "group__SimdArray.html#ga0db18c4c643f74dee67e7b357f66e1f4", null ],
      [ "fma", "group__SimdArray.html#ga97439099223fd29fa42541f7aa04a7cc", null ],
      [ "isfinite", "group__SimdArray.html#gacecb662a9bd6fa5b335ed082f11d43ca", null ],
      [ "isinf", "group__SimdArray.html#gacc76372dfba2e07b47a32cb3b25d0e94", null ],
      [ "isnan", "group__SimdArray.html#ga9d7c79dd7e56cf63afc79235892195c4", null ],
      [ "isnegative", "group__SimdArray.html#gac3277d2200e4fd970bfc94a646efcc7e", null ],
      [ "frexp", "group__SimdArray.html#gaa7da8e46d071738215ad0c1be86a53e5", null ],
      [ "ldexp", "group__SimdArray.html#gaac3a233b72277a553a087e17d290afa6", null ],
      [ "log", "group__SimdArray.html#gad3eff22ac37c904c95c9ac0687eaa7b8", null ],
      [ "log10", "group__SimdArray.html#ga8eecf9b6d8ab0f3415414536e3cc070c", null ],
      [ "log2", "group__SimdArray.html#ga92b01ea203ae16eeb1ca3e1e2e86b610", null ],
      [ "reciprocal", "group__SimdArray.html#ga5815bddaa5df5213fa689f7da98a5af8", null ],
      [ "round", "group__SimdArray.html#gafa8b398c8e135017dc76b6e59cb00708", null ],
      [ "rsqrt", "group__SimdArray.html#ga95bc5d7ce3175b3b9ee11beae2a5e379", null ],
      [ "sin", "group__SimdArray.html#gaa4d291130f26cb4d8a1f05482bfe5683", null ],
      [ "sincos", "group__SimdArray.html#gaeb11d4042dcea400cd11940af21163c1", null ],
      [ "sqrt", "group__SimdArray.html#gaa884802bc5a48130e107ef4a17d7da8e", null ],
      [ "trunc", "group__SimdArray.html#ga4336d4794fa319e863c87b705764d1b6", null ],
      [ "assign", "namespaceVc.html#ac1331eb8c64a239648b1563a355b309b", null ],
      [ "extract", "namespaceVc.html#a9709f0459e8b398f88e275e18f4d8c00", null ],
      [ "sin", "group__Math.html#gafe191df9235e551a9a3b5d85c6736489", null ],
      [ "cos", "group__Math.html#gabc25a842c21d9bf2bc87ad3816166be4", null ],
      [ "asin", "group__Math.html#gad0e19cd8165a37abce6ea30021e2dcfd", null ],
      [ "atan", "group__Math.html#ga651decdd1cb46bd5c64349c78304a344", null ],
      [ "atan2", "group__Math.html#ga5015b4f593c2454f06e3ec7750af789a", null ],
      [ "sincos", "group__Math.html#ga3c79ba1e8e377fd77f9e178f3936aa4b", null ],
      [ "copysign", "group__Math.html#ga57f0f15e3ee99fbd9e1c2065f05f7550", null ],
      [ "exponent", "group__Math.html#gaaf97ae66205905caad300973ef77b92d", null ],
      [ "isnegative", "group__Math.html#ga72c4a581aa30b12ba97808d736304c31", null ],
      [ "reinterpret_components_cast", "group__Utilities.html#ga50815bfe268083df7c8d7223dce212de", null ],
      [ "where", "group__Utilities.html#gaa18ac68167ac7614731134de7364a1d5", null ],
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
"classVc_1_1SimdArray.html#af4533bf51191b84669267c08df1fa78e",
"group__SimdArray.html#ga92b01ea203ae16eeb1ca3e1e2e86b610"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';