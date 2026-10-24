import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TutorModel = runtime.Types.Result.DefaultSelection<Prisma.$TutorPayload>;
export type AggregateTutor = {
    _count: TutorCountAggregateOutputType | null;
    _min: TutorMinAggregateOutputType | null;
    _max: TutorMaxAggregateOutputType | null;
};
export type TutorMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    adress: string | null;
    cpf: string | null;
};
export type TutorMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    adress: string | null;
    cpf: string | null;
};
export type TutorCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    adress: number;
    cpf: number;
    _all: number;
};
export type TutorMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    adress?: true;
    cpf?: true;
};
export type TutorMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    adress?: true;
    cpf?: true;
};
export type TutorCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    adress?: true;
    cpf?: true;
    _all?: true;
};
export type TutorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TutorWhereInput;
    orderBy?: Prisma.TutorOrderByWithRelationInput | Prisma.TutorOrderByWithRelationInput[];
    cursor?: Prisma.TutorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TutorCountAggregateInputType;
    _min?: TutorMinAggregateInputType;
    _max?: TutorMaxAggregateInputType;
};
export type GetTutorAggregateType<T extends TutorAggregateArgs> = {
    [P in keyof T & keyof AggregateTutor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTutor[P]> : Prisma.GetScalarType<T[P], AggregateTutor[P]>;
};
export type TutorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TutorWhereInput;
    orderBy?: Prisma.TutorOrderByWithAggregationInput | Prisma.TutorOrderByWithAggregationInput[];
    by: Prisma.TutorScalarFieldEnum[] | Prisma.TutorScalarFieldEnum;
    having?: Prisma.TutorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TutorCountAggregateInputType | true;
    _min?: TutorMinAggregateInputType;
    _max?: TutorMaxAggregateInputType;
};
export type TutorGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    phone: string[];
    adress: string;
    cpf: string;
    _count: TutorCountAggregateOutputType | null;
    _min: TutorMinAggregateOutputType | null;
    _max: TutorMaxAggregateOutputType | null;
};
export type GetTutorGroupByPayload<T extends TutorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TutorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TutorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TutorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TutorGroupByOutputType[P]>;
}>>;
export type TutorWhereInput = {
    AND?: Prisma.TutorWhereInput | Prisma.TutorWhereInput[];
    OR?: Prisma.TutorWhereInput[];
    NOT?: Prisma.TutorWhereInput | Prisma.TutorWhereInput[];
    id?: Prisma.StringFilter<"Tutor"> | string;
    name?: Prisma.StringFilter<"Tutor"> | string;
    email?: Prisma.StringFilter<"Tutor"> | string;
    phone?: Prisma.StringNullableListFilter<"Tutor">;
    adress?: Prisma.StringFilter<"Tutor"> | string;
    cpf?: Prisma.StringFilter<"Tutor"> | string;
    animals?: Prisma.AnimalListRelationFilter;
};
export type TutorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    adress?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    animals?: Prisma.AnimalOrderByRelationAggregateInput;
};
export type TutorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    cpf?: string;
    AND?: Prisma.TutorWhereInput | Prisma.TutorWhereInput[];
    OR?: Prisma.TutorWhereInput[];
    NOT?: Prisma.TutorWhereInput | Prisma.TutorWhereInput[];
    name?: Prisma.StringFilter<"Tutor"> | string;
    phone?: Prisma.StringNullableListFilter<"Tutor">;
    adress?: Prisma.StringFilter<"Tutor"> | string;
    animals?: Prisma.AnimalListRelationFilter;
}, "id" | "email" | "cpf">;
export type TutorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    adress?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    _count?: Prisma.TutorCountOrderByAggregateInput;
    _max?: Prisma.TutorMaxOrderByAggregateInput;
    _min?: Prisma.TutorMinOrderByAggregateInput;
};
export type TutorScalarWhereWithAggregatesInput = {
    AND?: Prisma.TutorScalarWhereWithAggregatesInput | Prisma.TutorScalarWhereWithAggregatesInput[];
    OR?: Prisma.TutorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TutorScalarWhereWithAggregatesInput | Prisma.TutorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Tutor"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Tutor"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Tutor"> | string;
    phone?: Prisma.StringNullableListFilter<"Tutor">;
    adress?: Prisma.StringWithAggregatesFilter<"Tutor"> | string;
    cpf?: Prisma.StringWithAggregatesFilter<"Tutor"> | string;
};
export type TutorCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: Prisma.TutorCreatephoneInput | string[];
    adress: string;
    cpf: string;
    animals?: Prisma.AnimalCreateNestedManyWithoutTutorInput;
};
export type TutorUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: Prisma.TutorCreatephoneInput | string[];
    adress: string;
    cpf: string;
    animals?: Prisma.AnimalUncheckedCreateNestedManyWithoutTutorInput;
};
export type TutorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.TutorUpdatephoneInput | string[];
    adress?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    animals?: Prisma.AnimalUpdateManyWithoutTutorNestedInput;
};
export type TutorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.TutorUpdatephoneInput | string[];
    adress?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    animals?: Prisma.AnimalUncheckedUpdateManyWithoutTutorNestedInput;
};
export type TutorCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    phone?: Prisma.TutorCreatephoneInput | string[];
    adress: string;
    cpf: string;
};
export type TutorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.TutorUpdatephoneInput | string[];
    adress?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TutorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.TutorUpdatephoneInput | string[];
    adress?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TutorScalarRelationFilter = {
    is?: Prisma.TutorWhereInput;
    isNot?: Prisma.TutorWhereInput;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type TutorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    adress?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
};
export type TutorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    adress?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
};
export type TutorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    adress?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
};
export type TutorCreateNestedOneWithoutAnimalsInput = {
    create?: Prisma.XOR<Prisma.TutorCreateWithoutAnimalsInput, Prisma.TutorUncheckedCreateWithoutAnimalsInput>;
    connectOrCreate?: Prisma.TutorCreateOrConnectWithoutAnimalsInput;
    connect?: Prisma.TutorWhereUniqueInput;
};
export type TutorUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: Prisma.XOR<Prisma.TutorCreateWithoutAnimalsInput, Prisma.TutorUncheckedCreateWithoutAnimalsInput>;
    connectOrCreate?: Prisma.TutorCreateOrConnectWithoutAnimalsInput;
    upsert?: Prisma.TutorUpsertWithoutAnimalsInput;
    connect?: Prisma.TutorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TutorUpdateToOneWithWhereWithoutAnimalsInput, Prisma.TutorUpdateWithoutAnimalsInput>, Prisma.TutorUncheckedUpdateWithoutAnimalsInput>;
};
export type TutorCreatephoneInput = {
    set: string[];
};
export type TutorUpdatephoneInput = {
    set?: string[];
    push?: string | string[];
};
export type TutorCreateWithoutAnimalsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: Prisma.TutorCreatephoneInput | string[];
    adress: string;
    cpf: string;
};
export type TutorUncheckedCreateWithoutAnimalsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: Prisma.TutorCreatephoneInput | string[];
    adress: string;
    cpf: string;
};
export type TutorCreateOrConnectWithoutAnimalsInput = {
    where: Prisma.TutorWhereUniqueInput;
    create: Prisma.XOR<Prisma.TutorCreateWithoutAnimalsInput, Prisma.TutorUncheckedCreateWithoutAnimalsInput>;
};
export type TutorUpsertWithoutAnimalsInput = {
    update: Prisma.XOR<Prisma.TutorUpdateWithoutAnimalsInput, Prisma.TutorUncheckedUpdateWithoutAnimalsInput>;
    create: Prisma.XOR<Prisma.TutorCreateWithoutAnimalsInput, Prisma.TutorUncheckedCreateWithoutAnimalsInput>;
    where?: Prisma.TutorWhereInput;
};
export type TutorUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: Prisma.TutorWhereInput;
    data: Prisma.XOR<Prisma.TutorUpdateWithoutAnimalsInput, Prisma.TutorUncheckedUpdateWithoutAnimalsInput>;
};
export type TutorUpdateWithoutAnimalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.TutorUpdatephoneInput | string[];
    adress?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TutorUncheckedUpdateWithoutAnimalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.TutorUpdatephoneInput | string[];
    adress?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TutorCountOutputType = {
    animals: number;
};
export type TutorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    animals?: boolean | TutorCountOutputTypeCountAnimalsArgs;
};
export type TutorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorCountOutputTypeSelect<ExtArgs> | null;
};
export type TutorCountOutputTypeCountAnimalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimalWhereInput;
};
export type TutorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    adress?: boolean;
    cpf?: boolean;
    animals?: boolean | Prisma.Tutor$animalsArgs<ExtArgs>;
    _count?: boolean | Prisma.TutorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tutor"]>;
export type TutorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    adress?: boolean;
    cpf?: boolean;
}, ExtArgs["result"]["tutor"]>;
export type TutorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    adress?: boolean;
    cpf?: boolean;
}, ExtArgs["result"]["tutor"]>;
export type TutorSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    adress?: boolean;
    cpf?: boolean;
};
export type TutorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "adress" | "cpf", ExtArgs["result"]["tutor"]>;
export type TutorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    animals?: boolean | Prisma.Tutor$animalsArgs<ExtArgs>;
    _count?: boolean | Prisma.TutorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TutorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TutorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TutorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tutor";
    objects: {
        animals: Prisma.$AnimalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        phone: string[];
        adress: string;
        cpf: string;
    }, ExtArgs["result"]["tutor"]>;
    composites: {};
};
export type TutorGetPayload<S extends boolean | null | undefined | TutorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TutorPayload, S>;
export type TutorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TutorCountAggregateInputType | true;
};
export interface TutorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tutor'];
        meta: {
            name: 'Tutor';
        };
    };
    findUnique<T extends TutorFindUniqueArgs>(args: Prisma.SelectSubset<T, TutorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TutorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TutorFindFirstArgs>(args?: Prisma.SelectSubset<T, TutorFindFirstArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TutorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TutorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TutorFindManyArgs>(args?: Prisma.SelectSubset<T, TutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TutorCreateArgs>(args: Prisma.SelectSubset<T, TutorCreateArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TutorCreateManyArgs>(args?: Prisma.SelectSubset<T, TutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TutorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TutorDeleteArgs>(args: Prisma.SelectSubset<T, TutorDeleteArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TutorUpdateArgs>(args: Prisma.SelectSubset<T, TutorUpdateArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TutorDeleteManyArgs>(args?: Prisma.SelectSubset<T, TutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TutorUpdateManyArgs>(args: Prisma.SelectSubset<T, TutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TutorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TutorUpsertArgs>(args: Prisma.SelectSubset<T, TutorUpsertArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TutorCountArgs>(args?: Prisma.Subset<T, TutorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TutorCountAggregateOutputType> : number>;
    aggregate<T extends TutorAggregateArgs>(args: Prisma.Subset<T, TutorAggregateArgs>): Prisma.PrismaPromise<GetTutorAggregateType<T>>;
    groupBy<T extends TutorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TutorGroupByArgs['orderBy'];
    } : {
        orderBy?: TutorGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TutorFieldRefs;
}
export interface Prisma__TutorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    animals<T extends Prisma.Tutor$animalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tutor$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TutorFieldRefs {
    readonly id: Prisma.FieldRef<"Tutor", 'String'>;
    readonly name: Prisma.FieldRef<"Tutor", 'String'>;
    readonly email: Prisma.FieldRef<"Tutor", 'String'>;
    readonly phone: Prisma.FieldRef<"Tutor", 'String[]'>;
    readonly adress: Prisma.FieldRef<"Tutor", 'String'>;
    readonly cpf: Prisma.FieldRef<"Tutor", 'String'>;
}
export type TutorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    where: Prisma.TutorWhereUniqueInput;
};
export type TutorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    where: Prisma.TutorWhereUniqueInput;
};
export type TutorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    where?: Prisma.TutorWhereInput;
    orderBy?: Prisma.TutorOrderByWithRelationInput | Prisma.TutorOrderByWithRelationInput[];
    cursor?: Prisma.TutorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TutorScalarFieldEnum | Prisma.TutorScalarFieldEnum[];
};
export type TutorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    where?: Prisma.TutorWhereInput;
    orderBy?: Prisma.TutorOrderByWithRelationInput | Prisma.TutorOrderByWithRelationInput[];
    cursor?: Prisma.TutorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TutorScalarFieldEnum | Prisma.TutorScalarFieldEnum[];
};
export type TutorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    where?: Prisma.TutorWhereInput;
    orderBy?: Prisma.TutorOrderByWithRelationInput | Prisma.TutorOrderByWithRelationInput[];
    cursor?: Prisma.TutorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TutorScalarFieldEnum | Prisma.TutorScalarFieldEnum[];
};
export type TutorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TutorCreateInput, Prisma.TutorUncheckedCreateInput>;
};
export type TutorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TutorCreateManyInput | Prisma.TutorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TutorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    data: Prisma.TutorCreateManyInput | Prisma.TutorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TutorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TutorUpdateInput, Prisma.TutorUncheckedUpdateInput>;
    where: Prisma.TutorWhereUniqueInput;
};
export type TutorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TutorUpdateManyMutationInput, Prisma.TutorUncheckedUpdateManyInput>;
    where?: Prisma.TutorWhereInput;
    limit?: number;
};
export type TutorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TutorUpdateManyMutationInput, Prisma.TutorUncheckedUpdateManyInput>;
    where?: Prisma.TutorWhereInput;
    limit?: number;
};
export type TutorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    where: Prisma.TutorWhereUniqueInput;
    create: Prisma.XOR<Prisma.TutorCreateInput, Prisma.TutorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TutorUpdateInput, Prisma.TutorUncheckedUpdateInput>;
};
export type TutorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
    where: Prisma.TutorWhereUniqueInput;
};
export type TutorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TutorWhereInput;
    limit?: number;
};
export type Tutor$animalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where?: Prisma.AnimalWhereInput;
    orderBy?: Prisma.AnimalOrderByWithRelationInput | Prisma.AnimalOrderByWithRelationInput[];
    cursor?: Prisma.AnimalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimalScalarFieldEnum | Prisma.AnimalScalarFieldEnum[];
};
export type TutorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TutorSelect<ExtArgs> | null;
    omit?: Prisma.TutorOmit<ExtArgs> | null;
    include?: Prisma.TutorInclude<ExtArgs> | null;
};
