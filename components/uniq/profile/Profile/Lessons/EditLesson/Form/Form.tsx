import {
    RequestLesson,
    RequestLessonFilterOptions,
    RequestPatchLessons,
} from "api/schema";
import React, {FC, useEffect, useState} from "react";

interface Props {
    lesson: RequestLesson;
    editOptions?: RequestLessonFilterOptions;
    loading: boolean;
    onSubmit: (editedLesson: RequestPatchLessons) => void;
}

const Form: FC<Props> = ({
                             lesson,
                             onSubmit,
                             editOptions,
                             loading = false,
                         }) => {
    const [displayLesson, setDisplayLesson] = useState<RequestLesson>(lesson);
    const [submitLessons, setSubmitLessons] = useState<RequestPatchLessons>({});
    useEffect(() => {
        setDisplayLesson(lesson);
    }, [lesson]);

    const convertNameToId = (
        identifyer: string | number,
        type: "building" | "status",
        reverse?: boolean
    ) => {
        const source =
            type === "building" ? editOptions?.building : editOptions?.status;
        if (reverse) return source?.find((sr) => sr.id === identifyer)?.name ?? "";

        return source?.find((sr) => sr.name === identifyer)?.id ?? -1;
    };
    return (
        <div>
            <div>
                <label className="label pb-1">نام درس</label>
                <input
                    className="input input-sm input-bordered rounded-md"
                    type="text"
                    value={displayLesson.name}
                    onChange={({target: {value}}) => {
                        setDisplayLesson({...displayLesson, name: value});
                        setSubmitLessons({...submitLessons, name: value});
                    }}
                />
                <label className="label pb-1">ساعت شروع</label>
                <input
                    className="input input-sm input-bordered rounded-md"
                    type="time"
                    value={displayLesson.lesson_time}
                    onChange={({target: {value}}) => {
                        setDisplayLesson({...displayLesson, lesson_time: value});
                        setSubmitLessons({...submitLessons, lesson_time: value});
                    }}
                />
                <label className="label pb-1">روز</label>
                <select
                    className="input input-sm input-bordered rounded-md"
                    value={displayLesson.lesson_day}
                    onChange={({target: {value}}) => {
                        setDisplayLesson({
                            ...displayLesson,
                            lesson_day: Number(value) as any,
                        });
                        setSubmitLessons({
                            ...submitLessons,
                            lesson_day: Number(value) as any,
                        });
                    }}
                >
                    <option value="0">شنبه</option>
                    <option value="1">یکشنبه</option>
                    <option value="2">دوشنبه</option>
                    <option value="3">سه‌شنبه</option>
                    <option value="4">چهراشنبه</option>
                    <option value="5">پنجشنبه</option>
                    <option value="6">جمعه</option>
                </select>

                <label className="label pb-1">ساختمان</label>
                <select
                    className="input input-sm input-bordered rounded-md"
                    value={convertNameToId(displayLesson.building_name, "building")}
                    onChange={({target: {value}}) => {
                        setDisplayLesson({
                            ...displayLesson,
                            building_name: convertNameToId(
                                Number(value),
                                "building",
                                true
                            ) as any,
                        });
                        setSubmitLessons({
                            ...submitLessons,
                            building: Number(value) as any,
                        });
                    }}
                >
                    {editOptions?.building.map((bl) => (
                        <option key={bl.id} value={bl.id}>
                            {bl.name}
                        </option>
                    ))}
                </select>
                <label className="label pb-1">کلاس</label>
                <input value={displayLesson.class_number ?? ''} onChange={({target: {value}}) => {
                    setDisplayLesson({
                        ...displayLesson,
                        class_number: Number(value)
                    })
                    setSubmitLessons({
                        ...submitLessons,
                        class_number: Number(value)
                    })
                }} type="number" className={'input input-sm input-bordered rounded-md '}/>
                <label className="label pb-1">وضعیت</label>
                <select
                    className="input input-sm input-bordered rounded-md"
                    value={convertNameToId(displayLesson.status_name, "status")}
                    onChange={({target: {value}}) => {
                        setDisplayLesson({
                            ...displayLesson,
                            status_name: convertNameToId(
                                Number(value),
                                "status",
                                true
                            ) as any,
                        });
                        setSubmitLessons({
                            ...submitLessons,
                            status: Number(value) as any,
                        });
                    }}
                >
                    {editOptions?.status.map((st) => (
                        <option key={st.id} value={st.id}>
                            {st.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex justify-center">
                <button
                    dir="ltr"
                    className={` btn btn-sm rounded-md mx-auto mt-2 ${
                        loading && "loading"
                    }`}
                    onClick={() => onSubmit(submitLessons)}
                >
                    ویرایش
                </button>
            </div>
        </div>
    );
};

export default Form;
